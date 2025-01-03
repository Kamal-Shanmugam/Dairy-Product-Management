import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div>

      <h1>Login Page</h1>
      <form method="post" id="loginForm">
        <label for="username">Username</label><br />
        <input type="text" id="username" name="username" required /><br />
        <label for="password">Password</label><br />
        <input type="password" id="password" name="password" required /><br /><br />
        <Link to='/register' id='miniRow'>Don't have an account? Register here...</Link><br />
        <button type="submit" id="login-btn">Login</button>
      </form>
    </div>
  )
}
