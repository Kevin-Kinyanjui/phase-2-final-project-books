import React from "react";

function CommentCard({ comment }) {
  return (
    <>
      <div className="comment-card">
        <div className="comment-card-title">{comment.title}</div>
        <p className="comment-card-description">{comment.description}</p>
        <h6 className="comment-card-username">@{comment.username}</h6>
      </div>
    </>
  );
}

export default CommentCard;
