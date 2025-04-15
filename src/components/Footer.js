import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-5 py-3">
      <div className="container">
        <div className="row justify-content-center g-1">
          <div className="col-md-2 col-12 text-md-start text-center">
            Alan Skamfer
          </div>
          <div className="col-md-2 col-12 text-center">
            <Link to="mailto:askamfer@att.net" className="nav-link">
              askamfer@att.net
            </Link>
          </div>
          <div className="col-2 text-md-end text-center">
            <Link
              to="https://www.linkedin.com/in/alan-skamfer/"
              className="linkedin-link"
            >
              <div className="linkedin-icon-wrapper">
                <img
                  src="/images/inBug-White.png"
                  className="linkedin-icon"
                  alt="LinkedIn Icon"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
