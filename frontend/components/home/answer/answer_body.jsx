import React from "react";
import TextEditor from "../text_editor";

export default class AnswerBody extends React.Component {
  constructor(props) {
    super(props);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.vote = {
      user_id: this.props.currentUser.id,
      answer_id: this.props.answer.id
    };
    this.state = {
      showEdit: false
    };
    this.textEditor = React.createRef();
    this.renderMoreDropDown = this.renderMoreDropDown.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.showEditAnswerBox = this.showEditAnswerBox.bind(this);
    this.renderEditor = this.renderEditor.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
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

  showEditAnswerBox() {
    this.setState({
      showEdit: true
    });
  }

  cancelEdit() {
    this.setState({ showEdit: false });
  }

  submitEdit() {
    this.props.editAnswer(
      {
        id: this.props.answer.id,
        author_id: this.props.currentUser.id,
        question_id: this.props.answer.question_id,
        body: this.textEditor.current.state.text
      },
      this.cancelEdit
    );
  }

  renderEditor() {
    if (this.state.showEdit) {
      return (
        <div className="answer-body-edit">
          <TextEditor
            ref={this.textEditor}
            preloadedText={this.props.answer.body}
          />
          <div className="text-editor-footer">
            <button onClick={this.submitEdit}>Submit</button>
            <a onClick={this.cancelEdit}>Cancel</a>
          </div>
        </div>
      );
    }
    return null;
  }

  deleteAnswer() {
    this.props.deleteAnswer(this.props.answer.id);
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
  renderMoreDropDown() {
    if (this.props.currentUser.id === this.props.answer.author.id) {
      return (
        <div className={`answer-dropdown-content hidden`}>
          <div>
            <a className="edit-answer-btn" onClick={this.showEditAnswerBox}>
              EDIT
            </a>
          </div>

          <a className="delete" onClick={this.deleteAnswer}>
            DELETE
          </a>
        </div>
      );
    }
    return (
      <div className={`answer-dropdown-content hidden`}>
        <a>...</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div
          className={`answer-body ${this.state.showEdit ? "hidden" : ""}`}
          dangerouslySetInnerHTML={{ __html: this.props.answer.body }}
        ></div>
        {this.renderEditor()}
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
            <div className="answer-footer-more">
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
              {this.renderMoreDropDown()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
