import { Link } from "react-router";
import HeroBanner from "./HeroBanner";

const AboutView = () => {
  return (
    <>
      <HeroBanner text="About TeamScope" backdrop="/images/home-hero.jpg" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <h2>About TeamScope</h2>
            <p>
              Welcome to TeamScope, a showcase of my skills in front-end
              development using React.
            </p>
            <p>
              As a passionate learner and sports enthusiast, I created TeamScope
              to combine my love for sports with my technical expertise. This
              application serves as both a dynamic portfolio piece and a
              testament to my ability to build feature-rich, interactive web
              apps.
            </p>

            <h2>What is TeamScope?</h2>
            <p>
              TeamScope is a sports team exploration app designed to provide
              users with an engaging and user-friendly experience. It was built
              with:
            </p>
            <ul>
              <li>
                <strong>React:</strong> Leveraging its component-based
                architecture for efficient and modular code.
              </li>
              <li>
                <strong>Bootstrap:</strong> Ensuring responsive design and
                polished UI.
              </li>
              <li>
                <strong>DB Sports API:</strong> Integrating real-time data to
                make the app dynamic and current.
              </li>
            </ul>
            <p>
              Through TeamScope, users can browse teams across the four major
              U.S. sports leagues (MLB, NFL, NBA, NHL), explore team details,
              and discover fascinating information about their venues.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Dynamic Data Integration:</strong> Real-time updates
                with API-driven content.
              </li>
              <li>
                <strong>Responsive Design:</strong> Real-time updates with
                API-driven content.
              </li>
              <li>
                <strong>Interactive Functionality:</strong> Search, navigation,
                and dynamic content loading enhance usability.
              </li>
              <li>
                <strong>Thoughtful Design:</strong> Hero banners,
                league-specific views, and visual touches create a professional
                and engaging interface.
              </li>
            </ul>

            <h2>About Me</h2>
            <p>
              I'm a web developer with 17 years professional experience
              dedicated to continuous learning and growth. I built TeamScope as
              part of my professional development to strengthen my React skills
              and demonstrate my ability to create real-world applications.
            </p>
            <p>
              TeamScope represents more than just code—it's a reflection of my
              creativity, determination, and problem-solving capabilities. I
              thrive on creating user-focused applications that are not only
              functional but also enjoyable to use.
            </p>

            <h2>Contact Me</h2>
            <p>
              I'm actively seeking opportunities to contribute to innovative
              projects and grow as a developer. If you're looking for someone
              with a strong foundation in React, an eye for design, and a drive
              to learn, feel free to reach out:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <Link to="mailto:askamfer@att.net">askamfer@att.net</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
