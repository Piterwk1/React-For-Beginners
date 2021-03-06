import React from 'react';

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store inventory.</p>
    <button className="github" onClick={() => props.authenticate('Github')}>
      Log In With GitHub
    </button>

    <button className="twitter" onClick={() => props.authenticate('Twitter')}>
      Log In With Twitter
    </button>

    <button className="Facebook" onClick={() => props.authenticate('Facebook')}>
      Log In With Facebook
    </button>
  </nav>
);

export default Login;
