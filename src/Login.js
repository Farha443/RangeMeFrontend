import React from "react";
import "./Login.css"
import { signInWithGoogle, signInWithFb } from "./services/firebase";
export default function Login() {
  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Continue with Google</span>
       </button>
       <button className="login-provider-button" onClick={signInWithFb}>
        <img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="facebook icon"/>
        <span> Continue with Facebook</span>
       </button>
      </div>
  );
}