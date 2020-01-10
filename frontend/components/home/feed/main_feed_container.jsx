import React from "react";
import FeedLeftBarContainer from "./feed_leftbar_container";
import FeedShowContainer from "./feed_show_container";

export default class FeedContent extends React.Component {
  render() {
    return (
      <div className="grid_page">
        <div className="layout_3col_left">
          <FeedLeftBarContainer />
        </div>
        <div className="layout_3col_center">
          <FeedShowContainer />
        </div>
      </div>
    );
  }
}
