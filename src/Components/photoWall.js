import React from "react";
import Photo from "./photo";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      <Link className="add-icon" to="/AddPhoto" />
      <div className="photo-grid">
        {props.posts
          .sort((x, y) => y.id - x.id)
          .map((post, index) => (
            <Photo key={index} post={post} index={index} {...props} />
          ))}
      </div>
    </div>
  );
}
export default PhotoWall;
