import { useEffect, useState } from "react";
import AxiosConnection from "./AxiosConnection";
import { Link } from "react-router";
import { FormatDate } from "./FormatDateTime";

const LastFiveGames = ({ teamId }) => {
  // Set useState variables for the last five games and the loading boolean variables
  const [lastFiveDetails, setLastFiveDetails] = useState([]);
  const [loadingLastFive, setLoadingLastFive] = useState(true);

  useEffect(() => {
    // Get details of the last five games from the API
    const fetchLastFive = async () => {
      setLoadingLastFive(true);
      try {
        const response = await AxiosConnection.get(
          `/eventslast.php?id=${teamId}`
        );
        const lastFiveResults = response.data.results;
        setLastFiveDetails(lastFiveResults);
      } catch (error) {
        console.error("Error fetching last five games", error);
      } finally {
        setLoadingLastFive(false);
      }
    };

    fetchLastFive();
  }, [teamId]);

  return (
    <>
      <h3 className="fw-bold mt-3 mb-2 fs-6">Recent Results</h3>

      {/* Last five games are still loading so display a loading message */}
      {loadingLastFive ? (
        <p>Loading Recent Results...</p>
      ) : (
        // Done loading so display a table with the last five games 
        <>
          {lastFiveDetails.length > 0 ? (
            <div className="table-responsive-lg">
              <table className="table  table-striped LastGamesTable">
                <colgroup>
                  <col className="column-1" />
                  <col className="column-2" />
                  <col className="column-3" />
                  <col className="column-4" />
                  <col className="column-5" />
                </colgroup>
                <thead>
                  <tr className="table-dark">
                    <th>Date</th>
                    <th>Road Team</th>
                    <th>Score</th>
                    <th>Home Team</th>
                    <th>Highlights</th>
                  </tr>
                </thead>
                <tbody>
                  {lastFiveDetails.map((game) => (
                    <tr key={game.idEvent}>
                      <td>{FormatDate(game.strTimestamp)}</td>
                      <td>
                        <img
                          src={game.strAwayTeamBadge}
                          alt={`${game.strAwayTeam} Logo`}
                        />{" "}
                        {game.strAwayTeam}
                      </td>
                      <td>
                        {game.intAwayScore} - {game.intHomeScore}
                      </td>
                      <td>
                        <img
                          src={game.strHomeTeamBadge}
                          alt={`${game.strHomeTeam} Logo`}
                        />{" "}
                        {game.strHomeTeam}
                      </td>
                      <td>
                        <Link to={game.strVideo} target="_blank">
                          Game Highlights
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No Recent Results</p>
          )}
        </>
      )}
    </>
  );
};

export default LastFiveGames;
