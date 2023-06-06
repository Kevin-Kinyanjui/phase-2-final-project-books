import React, { useContext } from "react";
import { booksContext } from "../App";
import { auth, provider } from "../config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

function Login() {
  let { setUser } = useContext(booksContext);

  function handleClick() {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user);
    });
  }

  return (
    <>
      <div className="loginBody">
        <div className="container">
          <h1 className="loginH1">Welcome to BookBuzz</h1>
          <h6 className="loginh6">
            Embark on a literary journey like never before!
          </h6>
          <button className="button" onClick={handleClick}>
            Sign in with google.
          </button>
        </div>
      </div>
      <>
        <h5>ABOUT</h5>
        <h6>
          Discover captivating tales, unlock hidden knowledge, and explore the
          vast realm of books with our revolutionary Library App.
        </h6>
        <h6>
          Our advanced recommendation system will curate personalized book
          suggestions tailored to your unique taste.
        </h6>
        <h6>
          Find your next favorite read with ease and broaden your literary
          horizons.
        </h6>
        <h6>
          Indulge in the joy of literary exploration, connect with fellow book
          enthusiasts, and share your thoughts on beloved stories.
        </h6>
        <h6>
          Like a book, leave a mark, and become part of our vibrant community of
          readers.
        </h6>
      </>
    </>
  );
}

export default Login;
