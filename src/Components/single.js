import React, { Component } from "react";
import Photo from "./photo";
import Comments from "./comments";

class Single extends Component {
  state = {};
  render() {
    const { match, posts } = this.props;
    const postId = Number(match.params.id);
    const post = posts.find(post => post.id === postId);
    const comments = this.props.comments[postId] || [];
    const index = posts.findIndex(post => post.id === postId);

    if (this.props.loading) return <div className="loader">...loading</div>;
    if (!post) return <h1>no post found</h1>;

    return (
      <div className="single-photo">
        <Photo post={post} {...this.props} index={index}></Photo>
        <Comments
          startAddingComment={this.props.startAddingComment}
          comments={comments}
          postId={postId}
        ></Comments>
      </div>
    );
  }
}

export default Single;
