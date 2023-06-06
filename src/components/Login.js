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
    <div className="loginBody">
      <div class="container">
        <h1 className="loginH1">Welcome to BookBuzz</h1>
        <p className="loginP">
          Embark on a literary journey like never before!
        </p>
        <p className="loginP">
          Discover captivating tales, unlock hidden knowledge, and explore the
          vast realm of books with our revolutionary Library App.
        </p>
        <p className="loginP">
          Immerse yourself in a world of infinite stories and unleash your inner
          bookworm. Whether you're a casual reader, an avid bibliophile, or a
          curious learner, our app has something for everyone.
        </p>
        <p className="loginP">But that's not all!</p>
        <p className="loginP">
          Our advanced recommendation system will curate personalized book
          suggestions tailored to your unique taste. Find your next favorite
          read with ease and broaden your literary horizons.
        </p>
        <p className="loginP">
          Indulge in the joy of literary exploration, connect with fellow book
          enthusiasts, and share your thoughts on beloved stories. Like a book,
          leave a mark, and become part of our vibrant community of readers.
        </p>
        <button class="button" onClick={handleClick}>
          Sign in with google.
        </button>
      </div>
    </div>
  );
}

export default Login;
