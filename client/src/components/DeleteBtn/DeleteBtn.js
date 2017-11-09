import React from "react";
import "./DeleteBtn.css";

const DeleteBtn = props => (
  <span className="btn btn-danger delete-btn" {...props}>
    Remove From Saved Articles
  </span>
);

export default DeleteBtn;
