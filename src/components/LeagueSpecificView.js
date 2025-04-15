import HeroBanner from "./HeroBanner";
import { useEffect, useState, useMemo } from "react";
import TeamCard from "./TeamCard";
import SearchBar from "./SearchBar";
import AxiosConnection from "./AxiosConnection";
import BackLink from "./BackLink";

const LeagueSpecificView = ({ league }) => {
  // Declare state variables
  const [searchText, setSearchText] = useState("");
  const [teams, setTeams] = useState([]); // Store all teams
  const [filteredTeams, setFilteredTeams] = useState([]); // Store filtered (featured) teams
  const [loading, setLoading] = useState(true);

  // Assign the intro text, hero tagline text and featured teams for each league.
  const { introText, taglineText, featuredTeamIds } = useMemo(() => {
    if (league === "MLB") {
      return {
        introText:
          "Welcome to our Major League Baseball (MLB) page! Start your journey with a lineup of featured teams specially selected to highlight the league's finest. Looking for a specific team? Use the search box below to explore all the amazing teams in the MLB and find your favorite!",
        taglineText:
          "Celebrate iconic teams and their history from the league that defines America’s pastime.",
        featuredTeamIds: ["135274", "135272", "135260", "135257"],
      };
    } else if (league === "NFL") {
      return {
        introText:
          "Dive into the world of National Football League (NFL) action! We've showcased some featured teams to give you a head start. But don't stop there—use the search bar below to discover every NFL team and gear up for thrilling football moments!",
        taglineText:
          "Explore iconic teams and their stories from the league that defines American football.",
        featuredTeamIds: ["134940", "134931", "134936", "134918"],
      };
    } else if (league === "NBA") {
      return {
        introText:
          "Step into the court of the National Basketball Association (NBA)! Begin with a lineup of featured teams that represent the league's energy and talent. Want more? Use the search bar below to find any NBA team and embrace the game you love!",
        taglineText:
          "Discover the teams that bring the energy and excitement of basketball to life.",
        featuredTeamIds: ["134874", "134865", "134867", "134860"],
      };
    } else if (league === "NHL") {
      return {
        introText:
          "Welcome to the National Hockey League (NHL) page! Get ready to hit the ice with a curated selection of featured teams, showcasing the heart and energy of the league. Want to explore more? Use the search bar below to uncover every NHL team and dive into the fast-paced world of professional hockey!",
        taglineText:
          "From historic franchises to thrilling matchups, get to know the teams that bring the magic to the NHL.",
        featuredTeamIds: ["134851", "134850", "134834", "134842"],
      };
    } else {
      return {
        introText: "Welcome to our sports page!",
        featuredTeamIds: [],
      };
    }
  }, [league]);

  // Filter the teams array against the featured team ids set above to create a featured array with the featured teams
  const featured = useMemo(() => {
    return teams.filter((team) => featuredTeamIds.includes(team.idTeam));
  }, [teams, featuredTeamIds]);

  // Fetch teams and set initial featured teams
  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      try {
        // Get all of the teams in the league from the API
        const response = await AxiosConnection.get(
          `search_all_teams.php?l=${league}`
        );
        const allTeams = response.data.teams;

        // Use setTeams to store all the teams in the teams variable declared using useState
        setTeams(allTeams);
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchTeams();
  }, [league]);

  // Adjust search filtering logic to preserve "Featured Teams" initially
  useEffect(() => {
    if (searchText === "") {
      // Set the filteredTeams variable in the useState hook above to be the feature teams array from above
      setFilteredTeams(featured);
    } else {
      // If search text is entered, filter the teams by team name (strTeam in the API) to see if it matches the search
      const filtered = teams.filter((team) =>
        team.strTeam.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredTeams(filtered);
    }
  }, [searchText, teams, featured]);

  return (
    <>
      {/* Call the HeroBanner component passing in the league name */}
      <HeroBanner
        text={`${league} Teams`}
        tagline={taglineText}
        backdrop={`/images/${league}-card.jpg`}
      />

      {/* Display the introText which is set earlier based on the leauge. Also call the SearchBar component passing in the searchText variable and the function to update searchText */}
      <div className="container mt-2">
        <BackLink link="/" backTo="home" />
        <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-3 mb-2">
            <p className="lead text-center">{introText}</p>
          </div>
        </div>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>

      {/* Conditional Rendering */}
      <div className="container">
        <div className="row">
          {/* Display a loading message if the data is still being loaded. */}
          {loading ? (
            <h2 className="text-center">Loading Teams...</h2>
          ) : (
            <>
              {/* Display "Featured Teams" heading if searchText is empty */}
              {searchText === "" && filteredTeams.length > 0 && (
                <div className="col-12 text-center mb-4">
                  <h2>Featured Teams</h2>
                </div>
              )}

              {/* Render the team cards */}
              {filteredTeams.length > 0 ? (
                filteredTeams.map((team) => (
                  <TeamCard key={team.idTeam} team={team} />
                ))
              ) : (
                <p className="text-center">No teams match your search.</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LeagueSpecificView;
