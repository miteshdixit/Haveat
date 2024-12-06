// import React, { useState } from 'react';

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SignInButton from "../components/SigninGoogle";

function SignUp() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
      try {
        const response = await axios.post("http://localhost:8080/api/user/newuser", {
          email, password, name , location , phone
        }, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        });
        toast.success(response?.data?.message || "please login to countinue!");
        // setAuthenticated(true);
        navigate("/login");
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    // Handle form submission here
    console.log("Form submitted!");
  };

  return (
    <div className="container d-flex justify-content-center">
    <div className="card  p-3" style={{width: "50%"}}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="d-flex gap-3 justify-content-between">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        </div>
        <span className="d-flex justify-content-center" style={{fontSize:"2rem"}}>or</span>
        
        <div className="mb-4 mt-4">
        <SignInButton/>
        </div>
        <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary  ">Submit</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
    </div>
  );
}

export default SignUp;
