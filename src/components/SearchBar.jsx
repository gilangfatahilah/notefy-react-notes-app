import React from "react";

const SearchBar = ({ search }) => {
  const onSearchbarChange = (event) => {
    search(event.target.value);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Find notes..."
        onChange={onSearchbarChange}
      />
    </div>
  );
};

export default SearchBar;
