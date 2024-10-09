import React from "react";
import "../css/login.css"; // Make sure to import your CSS file

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="welcome-message">Welcome to Decentralized Voting</h1>
        <p className="subtitle">
          Secure and transparent voting powered by blockchain
        </p>
        <button className="login-button" onClick={props.connectWallet}>
          Connect with Metamask
        </button>
      </div>
    </div>
  );
};

export default Login;
