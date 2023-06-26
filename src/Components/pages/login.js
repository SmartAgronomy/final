import { useState } from 'react';
import "./styles/login.css";
import eyeCloseIcon from "../Images/eye-slash-solid.svg"
import eyeOpenIcon from "../Images/eye-regular.svg"
import login_back from "../Images/login-background.jpeg"
import { useNavigate, Link, } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCookies } from "react-cookie";
import { useEffect } from 'react'
import useUserAPI from '../useUserApi';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function LoginUpdated() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();
  const [_, setCookies] = useCookies(["access_token"]);
  const { isLogged, isAdmin } = useUserAPI();


  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {


    e.preventDefault();



    // Validate form fields.
    if (!email || !password) {
      setErrorMessage("Both username and password are required.");
      return;
    }

    try {
      // Send login request to backend.
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Incorrect username or password");
      }

      const responseData = await response.json(); // Parse the response as JSON

      setCookies("access_token", responseData.token);
      window.localStorage.setItem("userID", responseData.userID);
      navigate("/");
      alert("You are Successfully Logged in..!");
    } catch (error) {
      console.error(error);
      setErrorMessage("Incorrect username or password");
    }
  };



  return (
    <div class="body">
      <div data-aos="fade-left" >
        <form class="login-form" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <p>Type your user name and password here.</p><br></br>
          {errorMessage && <div className="error">{errorMessage}</div>}

          <div class="login-email">
          <MarkEmailReadIcon sx={{marginLeft:'5px',height:'3vh'}}/> <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder='E-mail' onChange={handleemailChange} value={email} />
          </div>

          <div className="password-wrapper">
            <LockOpenIcon sx={{marginLeft:'8px',height:'3vh'}}/><input type={showPassword ? "text" : "password"} name="password" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handlePasswordChange} value={password} placeholder="Password" id="pass" />
            <div class="login-eye-toggle" onClick={() => setshowPassword(!showPassword)}>
              {showPassword ? <VisibilityIcon sx={{marginLeft:'260px',marginTop:'-60px',height:'2.5vh',cursor:'pointer'}}/> : <VisibilityOffIcon sx={{marginLeft:'260px',marginTop:'-60px',height:'2.5vh',cursor:'pointer'}} />}
            </div>
          </div>
          
          <input class="checkbox" type="checkbox" required="true" />
          <span>   I agree <Link>Terms and Conditions</Link> and <Link to="/privacy_policy">Privacy policy</Link></span><br></br><br></br>
          <button type="submit" id="btn"> Sign In <LoginIcon/> </button><br></br><br></br>


          <div class="not-registered">
            Not a Member?<Link to="/signup">  Jion Us </Link>
          </div>
        </form>
        <div>
          <img class="login-back" alt="Login Background" src={login_back} />
          <div class="login-back-h1"><h1>
            We are here to <br></br>help farmers
          </h1></div>
          <div class="login-back-p"><p>We standed by the farmers with the <br></br>billions of equipments we spend <br></br>on agriculture every year.</p></div>
          <button class="login-back-img">Sign in Now &#10095;&#10095;</button>
          {isLogged && <p>Welcome, logged-in user!</p>}
          {isAdmin && <p>You have admin privileges.</p>}

        </div>
      </div>

    </div>
  );
}

export default LoginUpdated;