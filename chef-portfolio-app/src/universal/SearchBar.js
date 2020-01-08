import React from "react";

function SearchBar() {
  return (
    <>
      <div className="searchBar">
        <div className="searchFormDesc">
          <p>
            EXPLORE MORE! Search by Chef, Ingredient, Recipe, Type and More!
          </p>
        </div>

        <form className="searchForm">
          <label>
            <input type="text" name="search" placeholder="Search" />
          </label>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
