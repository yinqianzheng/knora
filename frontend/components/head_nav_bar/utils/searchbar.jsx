import React from "react";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <img src="/assets/search_icon.png" className="search-icon"></img>
        <input type="search" placeholder="Search Knora" />
      </div>
    );
  }
}
