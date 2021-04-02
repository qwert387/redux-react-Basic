import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p>Постов покамест нет, чтобы создать введи что-нибудь в input и нажми создать </p>;
  }
  return syncPosts.map((post, index) => (
    <Post post={post} key={post.id} />
  ));
};
const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
