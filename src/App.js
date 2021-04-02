import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPost from "./components/FetchedPost";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="cal">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4 className="mt-3">Синхронные посты</h4>
          <Posts />
        </div>
        <div className="col">
          <h4>Асинхронные посты</h4>
          <FetchedPost posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
