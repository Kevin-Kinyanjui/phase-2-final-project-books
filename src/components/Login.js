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
    <div>
      <button onClick={handleClick}>Sign in with google.</button>
    </div>
  );
}

export default Login;
