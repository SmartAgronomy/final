
import './styles/signup.css';
import { useEffect, useState } from 'react';
import { useNavigate,Link, } from "react-router-dom";
import reg_back from "../Images/reg-back.webp"
import AOS from "aos";
import "aos/dist/aos.css";
import eyeCloseIcon from "../Images/eye-slash-solid.svg"
import eyeOpenIcon from "../Images/eye-regular.svg"
import tick from "../Images/tick.webp"


function SignupUpdated() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  let popup=document.getElementById("popup")
  function openPopup(){
     popup.classList.add("open-popup")
  }
  function closePopup(){
    popup.classList.add("close-popup")
  }

  const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }




  const handleSubmit = async (e)=>{

    e.preventDefault();

    const response = await fetch('http://localhost:8080/api/signup',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
    if(data.error){
      alert("Givan email is already registered")
    }
    
    
    
  }

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/api/signup',{
      method:'GET',
    })
   const data = await response.json();
   setUsers(data);
  }

  useEffect(()=>{
    getUsers();
  },[])

  function validateForm() {
    const password = form.password;
    const confirmPassword =form.cpassword;

    if (!form.fname || !form.lname || !form.mobile || !form.email || !password || !form.city || !form.state || !form.address) {
      alert("Please Fill all the details below to Register")
    }

  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }
    


  }


  return (
    <>
      <div class='reg-back'>
      <img src={reg_back} alt='registration background'/>
    </div>
    
    <div className='sign-up' data-aos="fade-left">
      <form class="sign-up-form" onSubmit={handleSubmit}>
        <h3>Sign Up </h3>
        <p>Register today by entering details below...!</p><br></br><br></br><br /><br /><br />

          <input type="text" placeholder="First Name" name="fname" onChange={handleForm} />


          <input type="text" placeholder="Last Name"name="lname" onChange={handleForm}/>
        

          <input type="tel" placeholder="Mobile no" name="mobile" onChange={handleForm}/>


          <input type="email" placeholder="E-mail" name="email"  onChange={handleForm}/>
    

          <select name="state"  onChange={handleForm}>
            <option value="">Select State</option>
            <option>Andhra pradesh</option>
            <option>Assam</option>
            <option>Kerala</option>
            <option>Manipur</option>
            <option>Panjab</option>
            <option>Karnataka</option>
            <option>Uttar pradesh</option>
            <option>Odisha</option>
            <option>Gujrat</option>
            <option>Goa</option>
            <option>Bihar</option>
          </select>


          <select name="city"  onChange={handleForm}>
            <option value="">Select city</option>
            <option>Tumkur</option>
            <option>Banglore</option>
            <option>Bagalkot</option>
            <option>Vijayapur</option>
            <option>Chikballapur</option>
            <option>Gadag</option>
            <option>Gadag</option>
            <option>Kalaburagi</option>
            <option>Hassan</option>
            <option>Mysuru</option>
            <option>Mandya</option>
          </select>


          <input type="text" placeholder="Permanent Address " name="address" onChange={handleForm} />


          <input type={showPassword ? "text" : "password"} placeholder="Password" name="password"  onChange={handleForm} minLength="6" />
          <div class="signup-eye-toggle" onClick={() => setshowPassword(!showPassword)}>
            {showPassword ? <img class="sign-up-hide-pass" alt="Eye icon(opened)" src={eyeOpenIcon} /> : <img class="sign-up-hide-pass" alt="Eue-icon(closed)" src={eyeCloseIcon} />}
          </div>

          <input type={showPassword ? "text" : "password"} name="cpassword"  placeholder="confirm Password" onChange={handleForm}minLength="6" />
          <div class="signup-eye-toggle" onClick={() => setshowPassword(!showPassword)}>
            {showPassword ? <img class="sign-up-hide-pass" alt="Eye icon(opened)" src={eyeOpenIcon} /> : <img class="sign-up-hide-pass" alt="Eue-icon(closed)" src={eyeCloseIcon} />}
    
          </div>
        

          <button class="bttn"   type="submit" onClick={validateForm} > Sign Up</button>
          <div class="signin-btn">
          <button class="bttn" id="btn"  type="submit" onClick={openPopup}> Sign Up</button><br></br><br></br>
          </div>
          <div class="already-registered">
          Already Signup<Link to="/signin">Click here to login</Link>
          </div>
      </form>
      <div>
        {/* <ul>
          {users.map(user=><li key={user._id}>{user.username},{user.password}</li>)}
        </ul> */}
      </div>
      
        { handleSubmit && validateForm ?(
        
         <div class="popup" id='popup'><img src={tick} alt="tick"/>
        <h4>Thank You!</h4>
        <b><p>You are Registered Succussfully!</p></b>
        <Link to="/signin">
        <button >Click here to Login</button></Link>
        <button class="ok" onClick={closePopup}>OK</button>
        </div> 
        

        ) : (
<>
</>
        )}

{!validateForm ?(
        
       <></>
       

       ) : (
        <div class="popup" id='popup'><img src={tick} alt="tick"/>
        <h4>Successfull!</h4>
        <b><p>You are Registered Succussfully!</p></b>
        <Link to="/signin">
        <button >Click here to Login</button></Link>
        <button class="ok" onClick={closePopup}>OK</button>
        </div> 
       )}
        
      </div>
      
    

    </>


  )
}

  export default SignupUpdated;