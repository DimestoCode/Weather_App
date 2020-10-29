import React from "react";
import "./styles.css";
const Search = (props) => {
  return (
    <>
      <h2 className="text-center mb-5 text-white">
        Fill the city name and get a weather result!
      </h2>
      <div className="search-panel d-flex">
        <input
          name="city"
          value={props.city}
          onChange={props.setCity}
          className="form-control inp"
        />
        <button
          className="btn font-weight-bold ml-3"
          onClick={props.handleSubmitForm}
        >
          Search
        </button>
      </div>
    </>
  );
};
export default Search;
