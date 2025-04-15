import { Link, useParams } from "react-router";
import HeroBanner from "./HeroBanner";
import { useEffect, useState } from "react";
import AxiosConnection from "./AxiosConnection";
import BackLink from "./BackLink";

const VenueDetailsView = () => {
  // Get the venue id from the URL 
  const { id } = useParams();

  // Declare useState variables for the venue details and the loading boolean
  const [venueDetails, setVenueDetails] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await AxiosConnection.get(`/lookupvenue.php?id=${id}`);
        const selectedVenue = response.data.venues;

        setVenueDetails(selectedVenue || null); 
      } catch (error) {
        console.error("Error fetching venu:", error);
        setVenueDetails(null); // Set VenueDetails to null if there's an error
      } finally {
        setLoading(false); 
      }
    };

    fetchVenue();
  }, [id]);

  const loadingBackdropUrl = "/images/home-hero.jpg";

  // Render with conditional logic
  return (
    <>
      <HeroBanner
        text={loading ? "" : venueDetails?.[0]?.strVenue}
        backdrop={
          loading
            ? loadingBackdropUrl
            : venueDetails?.[0]?.strLogo || loadingBackdropUrl
        }
      />

      {/* Display loading message if data is still being loaded */}
      {loading ? (
        <h2 className="text-center my-5">Loading Venue...</h2>
      ) : venueDetails && venueDetails.length > 0 ? (
        <div className="container my-2">
          <BackLink link="back" backTo="" />
          <div className="row my-3">
            <div className="col-md-3">
              <img
                src={venueDetails[0].strThumb}
                alt={venueDetails[0].strVenue}
                className="img-thumbnail"
              />

              <div className="details my-3">
                <div className="fs-6 fw-bold mb-0">Opened</div>
                <div>{venueDetails[0].intFormedYear}</div>
              </div>
              <div className="details my-3">
                <div className="fs-6 fw-bold mb-0">Location</div>
                <div>{venueDetails[0].strLocation}</div>
              </div>
              <div className="details my-3">
                <div className="fs-6 fw-bold mb-0">Capacity</div>
                <div>
                  {Number(venueDetails[0].intCapacity).toLocaleString()}
                </div>
              </div>
              {venueDetails[0].strWebsite && (
                <div className="details my-3">
                  <Link to={`https://${venueDetails[0].strWebsite}`}>
                    Venue Website
                  </Link>
                </div>
              )}
            </div>
            <div className="col-md-9">
              <h2 className="my-md-2">{venueDetails[0].strVenue}</h2>
              <p>{venueDetails[0].strDescriptionEN}</p>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-center my-5">Team not found</h2>
      )}
    </>
  );
};

export default VenueDetailsView;
