import React from "react";

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "hidden",
      title: ""
    };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
    this.preventClickThrough = this.preventClickThrough.bind(this);
    this.updateQustion = this.updateQustion.bind(this);
    this.submit = this.submit.bind(this);
  }

  hideModal() {
    this.setState({
      display: "hidden",
      title: ""
    });
    const dropdowns = document.getElementsByClassName(
      "question-dropdown-content"
    );
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (!openDropdown.classList.contains("hidden")) {
        openDropdown.classList.add("hidden");
      }
    }
  }

  showModal() {
    let title = "";
    if (this.props.question) {
      title = this.props.question.title;
    }
    this.setState({
      title: title,
      display: ""
    });
  }

  renderComponent() {
    if (this.props.type === "NAV") {
      return (
        <button onClick={this.showModal} className="add-question-btn">
          Add Question
        </button>
      );
    } else if (this.props.type === "EDIT") {
      return (
        <button onClick={this.showModal} className="edit-question-btn">
          EDIT
        </button>
      );
    } else {
      return (
        <a onClick={this.showModal} className="feed-head-prompt">
          What is your question?
        </a>
      );
    }
  }

  preventClickThrough(e) {
    e.stopPropagation();
  }

  updateQustion(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  submit() {
    const question = {};
    if (this.props.question) {
      question.id = this.props.question.id;
    }
    question.author_id = this.props.currentUser.id;
    question.title = this.state.title;
    this.props.action(question, this.hideModal);
  }

  render() {
    return (
      <div>
        {this.renderComponent()}
        <div
          onClick={this.hideModal}
          className={`question-form-modal ${this.state.display}`}
        >
          <div>
            <div
              onClick={e => this.preventClickThrough(e)}
              className="question-form-container"
            >
              <div>
                <input
                  className="question-form-input"
                  onChange={e => this.updateQustion(e)}
                  type="text"
                  name="title"
                  value={this.state.title}
                />
                <div className="question-form-footer">
                  <button onClick={this.submit}>{this.props.formType}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
