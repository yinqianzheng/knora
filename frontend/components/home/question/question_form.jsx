import React from "react";

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "hidden",
      question: ""
    };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
    this.preventClickThrough = this.preventClickThrough.bind(this);
  }

  hideModal() {
    this.setState({
      display: "hidden"
    });
  }

  showModal() {
    this.setState({
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
                <form className="question-form">
                  <input
                    type="text"
                    name="question"
                    value={this.state.question}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
