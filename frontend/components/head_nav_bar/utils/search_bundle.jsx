import React from "react";
import SearchBarContainer from "./searchbar_container";
import SearchResultContainer from "./search_result_container";
export default class SearchBundle extends React.Component {
  render() {
    return (
      <div className="search-bundle">
        <SearchBarContainer />
        <SearchResultContainer />
      </div>
    );
  }
}
