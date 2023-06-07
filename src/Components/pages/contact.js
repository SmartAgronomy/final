import Header from "../dashboard/header";
import emailjs from "emailjs-com"
import Contact_footer from "../headfooters/contact-footer";
import phone_icon from "../Images/phone_icon.png"
import Email from "../Images/email.webp"
import Location from "../Images/loca.png"
import Contact_background from "../Images/contact-background.jpg"
import "./styles/contact.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import facebook from "../Images/facebook.jpg"
import twitter from "../Images/i4.jpg"
import instagram from "../Images/instagram_logo.webp"
import youtube from "../Images/youtube_logo.png"
import linked_in from "../Images/linked-in-logo.png"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"


function Contact(){
  const btn = document.getElementById('button');

  const SentEmail=(e)=>{
      e.preventDefault();
      btn.value = 'Sending...';
      emailjs.sendForm("service_k702nu6","template_okwqn9r",e.target,"c3AKDUbdd39cDfec2")
      .then(()=>{
        btn.value = 'Send Email';
        alert("Message sent successfully");
      }).catch(()=>{
        btn.value = 'Send Email';
        alert("Something Went Wrong");
      })
        
  }
    useEffect(()=>{
        AOS.init({duration :2000})
     },[])

//      const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'service_k702nu6';
//    const templateID = 'template_okwqn9r';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent successfully!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });


    return(
      <div>
         <Header />
         <div class="contact-center">
            <img src={Contact_background} />
            <h1>
                Contact Us
            </h1>
            <p>
                We would love to respond to yuor queries and help you to succeed<br></br>
                Feel free to get in touch with Us
            </p>
         </div>
        
            <h1 class="form-heading">
                Contact our Team Now!
            </h1>
            <div class="contact-form" data-aos="fade-up">


            
                <span>Send your request</span><br></br><br></br><br></br>

     
        <div class="contact-form-template-higher">
        <form class="contact-form-template" onSubmit={SentEmail} id="form">
  <div class="field">
    <label for="user_name">Username</label>
    <input type="text" name="user_name" id="user_name" />
  </div>
  <div class="field">
    <label for="message">Message</label>
    <input type="text" name="message" id="message" />
  </div>
  <div class="field">
    <label for="user_email">Email</label>
    <input type="text" name="user_email" id="user_email" />
  </div>
  <div class="field">
    <label for="reply_to">Reply to</label>
    <input type="text" name="reply_to" id="reply_to" />
  </div>

  <input type="submit" id="button" value="Send Email" />
</form>

<script type="text/javascript">
  emailjs.init('c3AKDUbdd39cDfec2')
</script>
        </div>        
              
         </div>
            <div class="contact_us">
                              <img src={phone_icon}alt="contact no." />
                              <h5 class="h5_1">Call Us on </h5>
                              <h5 class="h5_2">+91 9380019642</h5>
                       </div>
                       <div class="email">
                              <img src={Email} alt="emeil" />
                              <h5 class="h5_1">Email us</h5>
                              <h5 class="h5_2">rental@agriindia.org</h5>
                       </div>
         <Contact_footer />
     </div>

    )
}
export default Contact;