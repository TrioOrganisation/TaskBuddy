import React from 'react'

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="task-icon">
          <span className="icon">📋</span>
          <span className="title">Task<span className="highlight">Buddy</span></span>
        </div>

        <p className="subtitle">
          Streamline your workflow and track progress effortlessly with our all-in-one task management app.
        </p>

        <form onSubmit={handleLogin}>
          {error && <div className="error-msg">{error}</div>}

          <div className="textbox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="forgot-password">
            <a href="#" onClick={() => alert('Password reset link sent to your email.')}>
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="btn">Login</button>

          <div className="divider">or</div>

          <button type="button" className="google-btn-style" onClick={handleGoogleLogin}>
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="google-icon-img" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
