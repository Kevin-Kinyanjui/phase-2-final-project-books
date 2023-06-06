import React, { useState, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { booksContext } from "../App";

const { user } = useContext(booksContext);

function Comments() {
  return (
    <div>
      {" "}
      <Form />
    </div>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const commentsRef = collection(db, "comments");

  function handleSubmit(event) {
    event.preventDefault();
    addDoc(commentsRef, {
      title: formData.title,
      description: formData.description,
      username: user?.displayName,
      id: user?.uid,
    }).then((data) => {
      console.log(data);
    });
    setFormData({ title: "", description: "" });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="comments">
      <form id="comment-form" onSubmit={handleSubmit}>
        <h3>Add a Comment</h3>
        <div>
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={handleChange}
            id="name"
            name="title"
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    </div>
  );
}

export default Comments;
