import axios from 'axios';
import React, { Component } from 'react'

class DeleteRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         postID:""
      }
    }
    deletePost =()=> {
        console.log("deletePost");
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.postID}`)
        .then((response) => {
            console.log(response);
            this.setState({ posts: response });
          })
          .catch((error) => {
            console.log(error);
            this.setState({ errorMessage: "Not getting Data From Response" });
          });
    }
    changehandler=(e) =>{
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {
    const { postID } = this.state;
    return (
      <div>
         <div className="form-group">
            <input
              type="text" name="postID"
              className="form-control"
              id="postID"
              aria-describedby="emailHelp"
            //   value={postID}
              placeholder="Add Post Id"
              onChange={this.changehandler}
              value={postID}
            ></input>
          </div>
          <button type="button" name='delete' id='button' onClick={this.deletePost} class="btn btn-primary">Delete Post</button>
      </div>
    )
  }
}

export default DeleteRequest