import { Link, useParams } from "react-router";
import HeroBanner from "./HeroBanner";
import { useEffect, useState } from "react";
import AxiosConnection from "./AxiosConnection";
import LastFiveGames from "./LastFiveGames";
import NextFiveGames from "./NextFiveGames";
import BackLink from "./BackLink";

const TeamDetailsView = () => {
  // Get the team id from the URL 
  const { id } = useParams();

  // Declare useState variables for the team details and the loading boolean
  const [teamDetails, setTeamDetails] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await AxiosConnection.get(`/lookupteam.php?id=${id}`);
        const selectedTeam = response.data.teams;
        setTeamDetails(selectedTeam || null); // Handle case where teams is null
      } catch (error) {
        console.error("Error fetching team:", error);
        setTeamDetails(null); // Set TeamDetails to null if there's an error
      } finally {
        setLoading(false); 
      }
    };

    fetchTeam();
  }, [id]);

  const loadingBackdropUrl = "/images/home-hero.jpg";

 
  return (
    <>
      <HeroBanner
        text={loading ? "" : teamDetails?.[0]?.strTeam}
        backdrop={
          loading
            ? loadingBackdropUrl
            : teamDetails?.[0]?.strLogo || loadingBackdropUrl
        }
      />

      {/* Display loading message if data is still being loaded */}
      {loading ? (
        <h2 className="text-center my-5">Loading Team...</h2>
      ) : teamDetails && teamDetails.length > 0 ? (
        <div className="container my-2">
          <BackLink
            link={`/${teamDetails[0].strLeague}`}
            backTo={`${teamDetails[0].strLeague} Teams`}
          />
          <div className="row my-3">
            <div className="col-md-3">
              <img
                src={teamDetails[0].strBadge}
                alt={teamDetails[0].strTeam}
                className="img-thumbnail"
              />
              <div className="details my-3">
                <h2 className="fs-6 fw-bold mb-0">Founded</h2>
                <div>{teamDetails[0].intFormedYear}</div>
              </div>
              <div className="details my-3">
                <h2 className="fs-6 fw-bold mb-0">Location</h2>
                <div>{teamDetails[0].strLocation}</div>
              </div>
              <div className="details my-3">
                <h2 className="fs-6 fw-bold mb-0">Stadium/Arena</h2>
                <div>
                  <Link to={`/venues/${teamDetails[0].idVenue}`}>
                    {teamDetails[0].strStadium}
                  </Link>
                </div>
              </div>
              <div className="details my-3">
                <h2 className="fs-6 fw-bold mb-0">Capacity</h2>
                <div>
                  {Number(teamDetails[0].intStadiumCapacity).toLocaleString()}
                </div>
              </div>
              {teamDetails[0].strWebsite && (
                <div className="details my-3">
                  <Link to={`https://${teamDetails[0].strWebsite}`}>
                    Team Website
                  </Link>
                </div>
              )}
            </div>
            <div className="col-md-9">
              <h2 className="my-md-2 d-sm-none d-md-block team-name">
                {teamDetails[0].strTeam}
              </h2>

              <LastFiveGames teamId={id} />
              <NextFiveGames teamId={id} />

              <h3 className="fs-6 fw-bold">Description</h3>
              <p className="lh-lg">{teamDetails[0].strDescriptionEN}</p>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-center my-5">Team not found</h2>
      )}
    </>
  );
};

export default TeamDetailsView;
