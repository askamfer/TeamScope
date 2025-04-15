import HeroBanner from "./HeroBanner";
import LeagueCard from "./LeagueCard";

const HomeView = () => {
  return (
    <>
      <HeroBanner
        text="TeamScope"
        tagline="Explore teams. Discover leagues. Stay connected."
        backdrop="/images/home-hero.jpg"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 mt-5 mb-2">
            <p className="lead text-center">
              Discover the teams that make sports unforgettable. Choose your
              league and start exploring today
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-3">
          <LeagueCard league="MLB" />
          <LeagueCard league="NFL" />
          <LeagueCard league="NBA" />
          <LeagueCard league="NHL" />
        </div>
      </div>
    </>
  );
};

export default HomeView;
