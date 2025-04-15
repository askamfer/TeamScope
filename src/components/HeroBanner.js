const HeroBanner = (props) => {
  return (
    <header className="bg-dark p-4 hero-container text-center">
      <h1 className="hero-text text-white">{props.text}</h1>
      <p className="hero-text fw-medium text-white">{props.tagline}</p>
      {props.backdrop && (
        <div
          className="hero-backdrop"
          style={{ backgroundImage: `url(${props.backdrop})` }}
        ></div>
      )}
    </header>
  );
};

export default HeroBanner;
