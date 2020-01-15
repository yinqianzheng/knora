import React from "react";

export default class AnswerBody extends React.Component {
  constructor(props) {
    super(props);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.vote = {
      user_id: this.props.currentUser.id,
      answer_id: this.props.answer.id
    };
  }

  upvote() {
    const vote = Object.assign({}, this.vote);
    vote.upvote = true;
    this.props.upvote(vote);
  }

  downvote() {
    const vote = Object.assign({}, this.vote);
    vote.upvote = false;
    this.props.downvote(vote);
  }

  render() {
    console.log("----------------");

    console.log(this.props.answer);
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
            <div
              className={`upvote ${
                this.props.voteList[this.props.answer.id] === true
                  ? "upvoted"
                  : ""
              }`}
              onClick={this.upvote}
            >
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
            <div
              className={`downvote ${
                this.props.voteList[this.props.answer.id] === false
                  ? "downvoted"
                  : ""
              }`}
              onClick={this.downvote}
            >
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
