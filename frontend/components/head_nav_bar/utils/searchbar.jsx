import React from "react";
import { Link } from "react-router-dom";
import { throttle } from "../../../utils/search";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      searchLayer: "hidden",
      resultStyle: "",
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.renderResultBox = this.renderResultBox.bind(this);
    this.search = throttle(this.props.search, 1000).bind(this);
  }

  updateSearch(e) {
    if (e.currentTarget.value !== "") {
      this.setState({
        keyword: e.currentTarget.value,
        resultStyle: "search-result-show",
      });

      this.search(e.currentTarget.value);
    } else {
      this.setState({
        keyword: e.currentTarget.value,
        resultStyle: "",
      });
      this.props.clearSearch();
    }
  }

  renderResultBox() {
    if (this.props.results.length > 0) {
      return (
        <div className="search-result">
          <ul className="result-list">
            {this.props.results.map((res) => (
              <li>
                <Link
                  onClick={() => {
                    this.props.loadQuestion(res.id);
                    this.props.clearSearch();
                    this.setState({ keyword: "", searchLayer: "hidden" });
                  }}
                  to={`/question_details/${res.id}`}
                >
                  {res.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="search-bar">
        <img src="/assets/search_icon.png" className="search-icon"></img>
        <input
          onFocus={(e) => {
            this.setState({
              searchLayer: "",
            });
            this.updateSearch(e);
          }}
          onChange={(e) => this.updateSearch(e)}
          type="search"
          placeholder="Search Knora"
          value={this.state.keyword}
        />

        {this.renderResultBox()}

        <div
          onClick={(e) => {
            this.setState({ searchLayer: "hidden" });
            this.props.clearSearch();
          }}
          id="enter-search-layer"
          className={`${this.state.searchLayer}`}
        ></div>
      </div>
    );
  }
}
