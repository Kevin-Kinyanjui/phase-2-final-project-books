import React, { useContext } from "react";
import { booksContext } from "../App";
import { auth, provider } from "../config/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

function Login() {
  let { user, setUser } = useContext(booksContext);

  function handleClick() {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user);
    });
  }

  function logOut() {
    signOut(auth).then(() => {
      setUser(null);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Sign in with google.</button>
      <h1>{user?.displayName}</h1>
      {user && <img src={user?.photoURL} alt="user" />}
      <button onClick={logOut}>logout</button>
    </div>
  );
}

export default Login;
