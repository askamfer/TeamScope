import { Link, useNavigate } from "react-router";

// If the link prop passed in is "back" instead of a path then use navigate to go back one page

const BackLink = ({ link, backTo }) => {
  const navigate = useNavigate();
  let backToText = "";

  if (!backTo) {
    backToText = "< Back";
  } else {
    backToText = `< Back to ${backTo}`;
  }

  const handleClick = (event) => {
    if (link === "back") {
      event.preventDefault();
      navigate(-1); 
    }
  };

  return (
    <Link
      to={link === "back" ? "#" : link} // Use "#" as a placeholder for "back"
      onClick={handleClick} 
    >
      {backToText}
    </Link>
  );
};

export default BackLink;
