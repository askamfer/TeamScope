import { Link } from "react-router";

const TeamCard = ({ team }) => {
  if (!team) {
    return <div>Error: Team data is not available.</div>;
  }

  const detailUrl = `/teams/${team.idTeam}`;
  return (
    <div className="col-md-3 col-12 col mb-4">
      <Link to={detailUrl} className="card-link">
        <div className="card team-card p-1 h-100">
          <img
            src={team.strBadge}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{team.strTeam}</h5>
            <p className="card-text">{team.strLocation}</p>
            <div className="btn btn-primary mt-auto">View Details</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TeamCard;
