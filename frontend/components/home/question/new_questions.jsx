import React from "react";
import LeftBarContainer from "./leftbar_container";
import QestionBundleContainer from "./question_bundle_container";

export default class NewQestions extends React.Component {
  constructor(props) {
    super(props);
    this.getContentElement = this.getContentElement.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      const range = [0];
      this.props.questions.forEach(question => {
        range.push(question.id);
      });
      this.props.loadMoreQustions(range);
    }
  }

  componentDidMount() {
    $(window).scroll(this.loadMore);
  }

  componentWillUnmount() {
    $(window).off("scroll");
  }

  getContentElement() {
    if (this.props.match.path === "/answer") {
      return (
        <div>
          <div className="qustions-box-title">
            <div className="start-icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                version="1.1"
                transform="translate(2, 2)"
              >
                <g
                  stroke="none"
                  stroke-width="1.5"
                  fill="white"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                >
                  <polygon points="12 16.6175467 7.05572809 19.2169043 8 13.7113766 4 9.81234022 9.52786405 9.00909456 12 4 14.472136 9.00909456 20 9.81234022 16 13.7113766 16.9442719 19.2169043"></polygon>
                </g>
              </svg>
            </div>
            <h2>Questions For You</h2>
          </div>
          <div>
            {this.props.questions.map(question => (
              <QestionBundleContainer question={question} />
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Answer Later Page</div>;
    }
  }

  render() {
    return (
      <div className="grid_page">
        <div className="layout_3col_left">
          <LeftBarContainer />
        </div>
        <div className="layout_3col_center">{this.getContentElement()}</div>
      </div>
    );
  }
}
