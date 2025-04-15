import { Link } from "react-router";

const LeagueCard = ({ league }) => {
  let cardText = "";
  // Set the text for the card based on the league passed in
  if (league === "MLB") {
    cardText =
      "Celebrate iconic teams and their history from the league that defines America’s pastime.";
  } else if (league === "NFL") {
    cardText =
      "Explore iconic teams and their stories from the league that defines American football.";
  } else if (league === "NBA") {
    cardText =
      "Discover the teams that bring the energy and excitement of basketball to life.";
  } else if (league === "NHL") {
    cardText =
      "From historic franchises to thrilling matchups, get to know the teams that bring the magic to the NHL.";
  }

  return (
    <div className="col-md-3 col-12 col">
      <Link to={league} className="card-link">
        <div className="card h-100">
          <img
            src={`/images/${league}-card.jpg`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{league}</h5>
            <p className="card-text">{cardText}</p>
            <div className="btn btn-primary mt-auto">Explore {league} Teams</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LeagueCard;
