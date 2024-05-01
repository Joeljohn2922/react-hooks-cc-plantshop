import React from "react";

function Search({searchPlant,setSearchPlant}) {
  const handleChange = (e) => { 
      setSearchPlant(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {searchPlant}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
