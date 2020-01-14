import React from "react";

export default class AnswerBody extends React.Component {
  constructor(props) {
    super(props);
    // this.createElementFromHTML = this.createElementFromHTML.bind(this);
  }

  // createElementFromHTML(htmlString) {
  //   var div = React.createElement("div");
  //   div.innerHTML = htmlString.trim();
  //   return div;
  // }
  render() {
    return (
      <div>
        <div
          className="answer-body"
          dangerouslySetInnerHTML={{ __html: this.props.answer.body }}
        ></div>
        <div className="answer-footer">
          <div className="answer-info AnswerCredibilityFacts">
            {this.props.answer.views} views
          </div>
          <div className="answer-action">
            <div className="upvote">
              <svg width="22px" height="22px" viewBox="0 0 24 24" version="1.1">
                <g
                  stroke-width="1.5"
                  stroke="#666"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                >
                  <polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon>
                </g>
              </svg>
              <span>Upvote · {this.props.answer.upvotes}</span>
            </div>
            <div className="downvote">
              <svg width="22px" height="22px" viewBox="0 0 24 24" version="1.1">
                <g
                  stroke-width="1.5"
                  stroke="#666"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                >
                  <polygon
                    transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) "
                    points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"
                  ></polygon>
                </g>
              </svg>
              <span>Downvote</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
