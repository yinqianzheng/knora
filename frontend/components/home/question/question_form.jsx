import React from "react";

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "hidden",
      title: "",
      form: 1
    };
    this.topics = [];
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
    this.preventClickThrough = this.preventClickThrough.bind(this);
    this.updateQustion = this.updateQustion.bind(this);
    this.submit = this.submit.bind(this);
    this.renderAskAdvice = this.renderAskAdvice.bind(this);
    this.updateTopic = this.updateTopic.bind(this);
  }

  hideModal() {
    this.setState({
      display: "hidden",
      title: "",
      form: 1
    });
    this.topics = [];
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

  updateTopic(e) {
    if (e.currentTarget.checked) {
      this.topics.push(e.currentTarget.value);
    } else {
      this.topics = this.topics.filter(el => el !== e.currentTarget.value);
    }
  }

  renderAskAdvice() {
    if (this.state.form === 1) {
      return (
        <div className="add-question-info">
          <h3>Tips on getting good answers quickly</h3>
          <ul>
            <li>
              <svg
                className="check-icon"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M12,3 C16.971,3 21,7.029 21,12 C21,16.971 16.971,21 12,21 C7.029,21 3,16.971 3,12 C3,7.029 7.029,3 12,3 Z M8,12.6290909 L10.9090909,15.5381818 L16,9"
                    stroke="#329bff"
                    stroke-width="1.5"
                  ></path>
                </g>
              </svg>
              Make sure your question hasn't been asked already
            </li>
            <li>
              <svg
                className="check-icon"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M12,3 C16.971,3 21,7.029 21,12 C21,16.971 16.971,21 12,21 C7.029,21 3,16.971 3,12 C3,7.029 7.029,3 12,3 Z M8,12.6290909 L10.9090909,15.5381818 L16,9"
                    stroke="#329bff"
                    stroke-width="1.5"
                  ></path>
                </g>
              </svg>
              Keep your question short and to the point
            </li>
            <li>
              <svg
                className="check-icon"
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M12,3 C16.971,3 21,7.029 21,12 C21,16.971 16.971,21 12,21 C7.029,21 3,16.971 3,12 C3,7.029 7.029,3 12,3 Z M8,12.6290909 L10.9090909,15.5381818 L16,9"
                    stroke="#329bff"
                    stroke-width="1.5"
                  ></path>
                </g>
              </svg>
              Double-check grammar and spelling
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="topic-selection">
          <h3>Add topics that best describe your question</h3>
          {this.props.topics.map(topic => (
            <div>
              <input
                onChange={e => this.updateTopic(e)}
                type="checkbox"
                name={topic.topic}
                value={topic.id}
              />
              {topic.topic}
            </div>
          ))}
        </div>
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
    if (this.props.type === "EDIT" || this.state.form === 2) {
      const question = {};
      if (this.props.question) {
        question.id = this.props.question.id;
      }
      question.author_id = this.props.currentUser.id;
      question.title = this.state.title;
      question.topics = this.topics;
      this.props.action(question, this.hideModal);
    } else {
      this.setState({
        form: 2
      });
    }
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
              <div className="question-form-header">
                <div>
                  {this.props.type === "EDIT" ? "Edit" : "Add Question"}
                </div>
              </div>
              {this.renderAskAdvice()}
              <textarea
                className="question-form-input"
                onChange={e => this.updateQustion(e)}
                type="text"
                name="title"
                placeholder={`Start your question with \"What\", \"How\", \"Why\", etc`}
                value={this.state.title}
              ></textarea>
              <div className="question-form-footer">
                <button onClick={this.submit}>{this.props.formType}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
