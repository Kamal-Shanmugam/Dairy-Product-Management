import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignupPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "", username: "", password: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/dairyFarm/users/new", data)
      .then((res) => console.log(res.data)
      )
    navigate('/login')
      .catch((err) => {
        console.log("Error submitting data", err);
      })
  }



  return (
    <div>
      <h1>Sign Up Page</h1>
      <form method="post" onSubmit={handleSubmit} id="loginForm">

        <label htmlFor="fullname">Full Name</label><br />
        <input type="text" id="fullname" name="fullname" value={data.fullname} onChange={handleInputChange} required /><br />

        <label htmlFor="username">Username</label><br />
        <input type="text" id="username" name="username" value={data.username} onChange={handleInputChange} required /><br />

        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" name="password" value={data.password} onChange={handleInputChange} required /><br />

        <Link to='/login' id='miniRow'>Already have an account? Login here...</Link><br />
        
        <button type="submit" id="submit-btn">Register</button>
      </form>
    </div>



  )
}
