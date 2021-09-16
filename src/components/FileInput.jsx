import React from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileRef = React.createRef();
  }
  handleSubmit(event) {
    const fileName = this.fileRef.current.files[0].name;
    event.preventDefault();
    alert(`Selected file- ${fileName}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file :
          <input type="file" ref={this.fileRef} />
          <br />
          <button type="submit">Submit</button>
        </label>
      </form>
    );
  }
}

export default FileInput;
