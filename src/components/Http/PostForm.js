import React, { Component } from "react";
import axios from "axios";


class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submithandler = e=>{
    e.preventDefault()
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
    .then((response) => {
        console.log(response);
        this.setState({ posts: response });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Not getting Data From Response" });
      });

  }
  editPosthandler=(e)=>{
    e.preventDefault()
    console.log(this.state);
    axios.patch(`https://jsonplaceholder.typicode.com/posts/${this.state.userId}`,this.state)
    .then((response) => {
        console.log(response);
        this.setState({ posts: response });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Not getting Data From Response" });
      });
  }
  render() {
    const { userId, title, body } = this.state;
    return (
      <div className="  m-auto">
        <form className="card w-50" onSubmit={this.submithandler}>
          <div className="form-group">
            <input
              type="text" name="userId"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userId}
              placeholder="ID"
              onChange={this.changehandler}
            ></input>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <input
              type="text" name="title"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Title of POst"
              value={title}
              onChange={this.changehandler}
            ></input>
          </div>
          <div className="form-group">
            <textarea
              type="text"name="body"
              placeholder="Enter Text Body"
              className="form-control"
              id="exampleCheck1"
              value={body}
              onChange={this.changehandler}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <button type="button" onClick={this.editPosthandler} name="edit" className="btn btn-primary">Edit Post</button>
      </div>
    );
  }
}

export default PostForm;
