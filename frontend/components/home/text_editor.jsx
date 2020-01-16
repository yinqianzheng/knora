import React from "react";
import ReactQuill from "react-quill";

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.preloadedText ? this.props.preloadedText : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.modules = {
      toolbar: [
        ["bold", "italic", "underline", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ],
        ["link", "image"],
        ["clean"]
      ],
      clipboard: {
        matchVisual: false
      }
    };

    this.formats = [
      "bold",
      "italic",
      "underline",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image"
    ];
  }

  handleChange(html) {
    this.setState({ text: html });
  }

  render() {
    return (
      <ReactQuill
        theme="snow"
        onChange={this.handleChange}
        value={this.state.text}
        modules={this.modules}
        formats={this.formats}
        bounds={".app"}
        placeholder={this.props.placeholder}
      />
    );
  }
}
