import React from "react";
import { EditQuestionForm } from "../question/question_form_comtainer";
import TextEditor from "../text_editor";
import { Link } from "react-router-dom";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableClass: "",
      render: true,
      dropdown: "hidden",
      textEditor: "hidden",
      numOfFollowers: this.props.question.numOfFollowers
    };
    this.closeTextEditor = this.closeTextEditor.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.loadTextEditor = this.loadTextEditor.bind(this);
    this.getFooter = this.getFooter.bind(this);
    this.getQuestionInfo = this.getQuestionInfo.bind(this);
    this.getTopicCard = this.getTopicCard.bind(this);
    this.getMoreDropDown = this.getMoreDropDown.bind(this);
    this.textEditor = React.createRef();
    this.submitAnswer = this.submitAnswer.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails() {
    if (this.props.type !== "DETAIL") {
      this.props.history.push(`question_details/${this.props.question.id}`);
    }
  }

  deleteQuestion() {
    this.props.deleteQuestion(this.props.question.id);
    if (this.props.type === "DETAIL") {
      this.props.history.push("/feed");
    }
  }

  componentDidMount() {
    window.onclick = function(event) {
      const questionDropdowns = document.getElementsByClassName(
        "question-dropdown-content"
      );
      let i;
      for (i = 0; i < questionDropdowns.length; i++) {
        let openQDropdown = questionDropdowns[i];
        if (!openQDropdown.classList.contains("hidden")) {
          openQDropdown.classList.add("hidden");
        }
      }
      if (
        event.target.matches(".question-footer-more") &&
        event.target.children[1]
      ) {
        event.target.children[1].classList.remove("hidden");
      }
      if (event.target.matches(".edit-question-btn")) {
        event.target.parentElement.parentElement.parentElement.classList.remove(
          "hidden"
        );
      }

      const dropdowns = document.getElementsByClassName(
        "answer-dropdown-content"
      );
      let j;
      for (j = 0; j < dropdowns.length; j++) {
        let openDropdown = dropdowns[j];
        if (!openDropdown.classList.contains("hidden")) {
          openDropdown.classList.add("hidden");
        }
      }
      if (
        event.target.matches(".answer-footer-more") &&
        event.target.children[1]
      ) {
        event.target.children[1].classList.remove("hidden");
      }
      if (event.target.matches(".edit-answer-btn")) {
        event.target.parentElement.parentElement.parentElement.classList.remove(
          "hidden"
        );
      }
    };
  }

  componentWillUnmount() {
    $(window).off("click");
  }

  submitAnswer() {
    this.props.createAnswer(
      {
        author_id: this.props.currentUser.id,
        question_id: this.props.question.id,
        body: this.textEditor.current.state.text
      },
      this.closeTextEditor
    );
    this.textEditor.current.setState({ text: "" });
  }

  handleFollow() {
    const watch = {
      watcher_id: this.props.currentUser.id,
      question_id: this.props.question.id
    };
    if (this.props.watchList.includes(this.props.question.id)) {
      this.props.unfollow(watch);
    } else {
      this.props.follow(watch);
    }
  }

  getFooter() {
    if (this.props.footer === false) return null;
    const folowState = this.props.watchList.includes(this.props.question.id)
      ? "followed"
      : "unfollowed";
    return (
      <div>
        {this.getQuestionInfo()}
        <div>
          <div className="question-card-footer">
            <div
              onClick={this.loadTextEditor}
              className={`question-footer-left ${this.state.disableClass}`}
            >
              <svg
                width="17px"
                height="17px"
                viewBox="0 0 24 24"
                version="1.1"
                transform="translate(0, 4)"
              >
                <g
                  stroke="none"
                  fill="rgb(50, 155, 255)"
                  fill-rule="evenodd"
                  stroke-width="2"
                >
                  <path d="M3.56993697,19.0927202 L4.90727984,20.430063 L6.32212519,19.8415186 L21.6540999,4.51430825 C22.0414488,4.12695944 22.1927257,3.56238623 22.0509462,3.0332579 C21.9091667,2.50412957 21.4958704,2.09083329 20.9667421,1.94905379 C20.4376281,1.80727812 19.8730711,1.95854305 19.4857232,2.34586864 L4.15848145,17.6778748 L3.56993697,19.0927202 Z M3.04166667,3.04166667 L3.04166667,13.4375 C3.04166667,13.782678 2.76184464,14.0625 2.41666667,14.0625 C2.0714887,14.0625 1.79166667,13.782678 1.79166667,13.4375 L1.79166667,2.41666667 C1.79166667,2.0714887 2.0714887,1.79166667 2.41666667,1.79166667 L12.4791667,1.79166667 C12.8243446,1.79166667 13.1041667,2.0714887 13.1041667,2.41666667 C13.1041667,2.76184464 12.8243446,3.04166667 12.4791667,3.04166667 L3.04166667,3.04166667 Z M20.9583333,20.9583333 L20.9583333,10.5625 C20.9583333,10.217322 21.2381554,9.9375 21.5833333,9.9375 C21.9285113,9.9375 22.2083333,10.217322 22.2083333,10.5625 L22.2083333,21.5833333 C22.2083333,21.9285113 21.9285113,22.2083333 21.5833333,22.2083333 L11.5208333,22.2083333 C11.1756554,22.2083333 10.8958333,21.9285113 10.8958333,21.5833333 C10.8958333,21.2381554 11.1756554,20.9583333 11.5208333,20.9583333 L20.9583333,20.9583333 Z M18.6017396,1.46208528 C19.3049382,0.758886609 20.3297725,0.484283075 21.2902659,0.741646501 C22.2507593,0.999009928 23.0009901,1.74924069 23.2583535,2.7097341 C23.5157169,3.67022752 23.2411134,4.69506179 22.5379147,5.39826041 L7.11833139,20.8130521 C7.06053277,20.8708327 6.99196292,20.9167166 6.91650427,20.9481057 L1.69837927,23.1187307 C1.18343214,23.3329374 0.667062601,22.8165679 0.881269257,22.3016207 L3.05189426,17.0834957 C3.08328339,17.0080371 3.12916726,16.9394672 3.18694792,16.8816686 L18.6017396,1.46208528 Z"></path>
                </g>
              </svg>
              <span>Answer</span>
            </div>

            <div
              onClick={this.handleFollow}
              className={`question-footer-left ${folowState}`}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                version="1.1"
                transform="translate(0, 4)"
              >
                <g stroke="#666" stroke-width="1.5" fill="none">
                  <path
                    d="M14.5,19 C14.5,13.3369229 11.1630771,10 5.5,10 M19.5,19 C19.5,10.1907689 14.3092311,5 5.5,5"
                    id="lines"
                  ></path>
                  <circle
                    cx="7.5"
                    cy="17"
                    r="2"
                    fill="none"
                    stroke="#666"
                  ></circle>
                </g>
              </svg>
              <span>{`Follow · ${this.props.question.numOfFollowers}`}</span>
            </div>
            <div className="question-footer-more">
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                version="1.1"
                transform="translate(0, 3)"
              >
                <g
                  stroke-width="1.5"
                  stroke="#666"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path d="M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z"></path>
                </g>
              </svg>
              {this.getMoreDropDown()}
            </div>
          </div>
          <div className={`text-editor-container ${this.state.textEditor}`}>
            <TextEditor ref={this.textEditor} />
            <div className="text-editor-footer">
              <button onClick={this.submitAnswer}>Submit</button>
              <a onClick={this.closeTextEditor}>Cancel</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getMoreDropDown() {
    if (this.props.currentUser.id === this.props.question.authorId) {
      return (
        <div className={`question-dropdown-content hidden`}>
          <a>
            <EditQuestionForm type="EDIT" question={this.props.question} />
          </a>
          <a className="delete" onClick={this.deleteQuestion}>
            DELETE
          </a>
        </div>
      );
    }
    return (
      <div className={`question-dropdown-content hidden`}>
        <a>...</a>
      </div>
    );
  }
  loadTextEditor() {
    this.setState({
      textEditor: "",
      disableClass: "noClick"
    });
  }

  closeTextEditor() {
    this.setState({
      textEditor: "hidden",
      disableClass: ""
    });
  }

  getQuestionInfo() {
    return (
      <div className="question-info">
        <a
          onClick={this.showDetails}
        >{`${this.props.question.numOfAnswers} Answers`}</a>
      </div>
    );
  }

  getTopicCard() {
    const text = this.props.footer !== false ? "Question" : "Answer";
    if (
      this.props.type !== "DETAIL" &&
      (this.props.footer !== undefined || this.props.footer === false)
    )
      return <div className="reason_text">{text} · Recommended for you</div>;
    return (
      <div className="topic-card">
        {this.props.question.topics
          ? this.props.question.topics.map(topic => (
              <Link
                onClick={() => {
                  this.props.selectTopic(topic.topic);
                  this.props.getQuestionsByTopic(topic.id);
                }}
                to="/feed"
              >
                {topic.topic}
              </Link>
            ))
          : "no related topic"}
      </div>
    );
  }

  render() {
    return (
      <div className="question-container">
        {this.getTopicCard()}
        <div className="question-card">
          <h1>
            <a onClick={this.showDetails}>{this.props.question.title}</a>
          </h1>
          {this.getFooter()}
        </div>
      </div>
    );
  }
}
