import React from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 3,
      title: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Загаловок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
          <button className="btn btn-success mt-3" type="submit">
            Создать
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
