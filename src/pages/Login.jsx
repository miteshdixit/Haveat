

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from "../main";
import SignInButton from "../components/SigninGoogle";
import { useUserIDContext } from "../components/Context";


function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {setAuthToken} = useAuthContext()
const {UserID, setUserID} = useUserIDContext()

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
      try {
        const response = await axios.post("http://localhost:8080/api/user/login", {
          email, password
        }, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
           
        });
        
        toast.success(response.data.message);
       
        localStorage.setItem("authToken" , response.data.token);
        localStorage.setItem("userID" ,response.data.user._id )
        setUserID(response.data.user._id)
        setAuthToken(localStorage.getItem("authToken"))

        navigate("/"); 
        
      } catch(error) {
        toast.error(error?.message||"Enter valid email or password");
      }


   console.log("user id" , UserID);
  };
 

  return (
    <div className="container d-flex justify-content-center ">
      <div className="card  p-3" style={{width: "50%"}}>
  <div className="card-body">
    <h5 className="card-title">Log-in!</h5>
    <p className="card-text">TO login enter your email and password!</p>
  </div>
  <form >
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
        <span className="d-flex justify-content-center" style={{fontSize:"2rem"}}>or</span>
        
        <div className="mb-4 mt-4">
        <SignInButton/>
        </div>
        <button type="submit" className="btn btn-primary  container " onClick={handleSubmit}>Submit</button>
      </form>
</div>
      
      <ToastContainer/>
    </div>
  );
}


export default Login;
