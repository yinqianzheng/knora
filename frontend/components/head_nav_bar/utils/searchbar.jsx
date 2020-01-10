import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
  }
  updateSearch(e) {
    this.setState({ keyword: e.currentTarget.value });
    alert(
      `now you are searching for: ${e.currentTarget.value} \n Unfortunately, I didn't implement search yet`
    );
  }
  render() {
    return (
      <div className="search-bar">
        <img src="/assets/search_icon.png" className="search-icon"></img>
        <input
          onChange={e => this.updateSearch(e)}
          type="search"
          placeholder="Search Knora"
          value={this.state.keyword}
        />
      </div>
    );
  }
}
