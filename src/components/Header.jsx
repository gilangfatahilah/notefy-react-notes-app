import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ search }) => {
  return (
    <div className="note-app__header">
      <h1>Notefy</h1>
      <SearchBar search={search} />
    </div>
  );
};

export default Header;
