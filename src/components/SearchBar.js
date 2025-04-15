const SearchBar = ({ searchText, setSearchText }) => {
  const updateSearchText = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="col-lg-6 offset-lg-3 mb-5">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2 team-search-input"
          type="search"
          placeholder="Search for team, or city..."
          aria-label="Search"
          onChange={updateSearchText}
        />
      </form>
    </div>
  );
};

export default SearchBar;
