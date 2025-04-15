import { Link } from "react-router";

const PageNotFoundView = () => {
  return (
    <>
      <div className="containter">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <h1>Oops!</h1>
            <p>This page got benched. Let's get you back in the game.</p>
            <p>
              <Link to="/">Return to the home page</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFoundView;
