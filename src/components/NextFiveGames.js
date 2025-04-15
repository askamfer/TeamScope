import { useEffect, useState } from "react";
import AxiosConnection from "./AxiosConnection";
import { FormatDate, FormatTime } from "./FormatDateTime";

const NextFiveGames = ({ teamId }) => {
  // Set useState variables for the next five games and the loading boolean variables
  const [nextFiveDetails, setnextFiveDetails] = useState([]);
  const [loadingNextFive, setLoadingNextFive] = useState(true);

  useEffect(() => {
    // Get details of the next five games from the API
    const fetchNextFive = async () => {
      setLoadingNextFive(true);
      try {
        const response = await AxiosConnection.get(
          `/eventsnext.php?id=${teamId}`
        );
        const nextFiveGames = response.data.events || []; // If there are no upcoming games set to an empty array

        setnextFiveDetails(nextFiveGames);
      } catch (error) {
        console.error("Error fetching next five games:", error);
        setnextFiveDetails([]); // Set to an empty arrary
      } finally {
        setLoadingNextFive(false);
      }
    };

    fetchNextFive();
  }, [teamId]);

  return (
    <>
      <h3 className="fw-bold my-2 fs-6">Upcoming Games</h3>

      {/* Next five games are still loading so display a loading message */}
      {loadingNextFive ? (
        <p>Loading Upcoming Games...</p>
      ) : (
        // Done loading so display a table with the next five games
        <>
          {nextFiveDetails.length > 0 ? (
            <div className="table-responsive-lg">
              <table className="table  table-striped NextGamesTable">
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
                    <th>Time</th>
                    <th>Road Team</th>
                    <th>Home Team</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {nextFiveDetails.map((game) => (
                    <tr key={game.idEvent}>
                      <td>{FormatDate(game.strTimestamp)}</td>
                      <td>{FormatTime(game.strTimestamp)}</td>
                      <td>
                        <img
                          src={game.strAwayTeamBadge}
                          alt={`${game.strAwayTeam} Logo`}
                        />{" "}
                        {game.strAwayTeam}
                      </td>
                      <td>
                        <img
                          src={game.strHomeTeamBadge}
                          alt={`${game.strHomeTeam} Logo`}
                        />{" "}
                        {game.strHomeTeam}
                      </td>
                      <td>{game.strVenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No Upcoming Games</p>
          )}
        </>
      )}
    </>
  );
};

export default NextFiveGames;
