import Header from "../dashboard/header";
import emailjs from "emailjs-com"
import Contact_footer from "../headfooters/contact-footer";
import phone_icon from "../Images/phone_icon.png"
import Email from "../Images/email.webp"
import Contact_background from "../Images/contact-background.jpg"
import "./styles/contact.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
import map from "../Images/google-map.png"


function Contact() {
  const btn = document.getElementById('button');
  const [form, setForm] = useState({});


  const SentEmail = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      btn.value = 'Sending...';
      emailjs
        .sendForm("service_k702nu6", "template_okwqn9r", e.target, "c3AKDUbdd39cDfec2")
        .then(() => {
          btn.value = 'Send Email';
          alert("Message sent successfully");
        })
        .catch(() => {
          btn.value = 'Send Email';
          alert("Something went wrong");
        });
    }
  };

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const validateForm = () => {
    if (!form.user_name || !form.message || !form.user_email || !form.phone_no) {
      alert("All fields must be filled");
      return false;
    }
    return true;
  };
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])




  return (
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
      <div class="contact-form">



        <span>Send your request</span><br></br><br></br><br></br>


        <div class="contact-form-template-higher">
          <form class="contact-form-template" onSubmit={SentEmail} id="form">
            <div class="field">
              <label for="user_name">Username</label>
              <input type="text" placeholder="Your Name" name="user_name" id="user_name" onChange={handleForm} />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <input type="text" placeholder=" Write your queries here..."name="message" id="message" onChange={handleForm} />
            </div>
            <div class="field">
              <label for="user_email">Email</label>
              <input type="text" name="user_email" placeholder="Your Email id"id="user_email" onChange={handleForm} />
            </div>
            <div class="field">
              <label for="phone_no">Contact No.</label>
              <input type="text" name="phone_no" placeholder="Your Contact Number"id="phone_no" onChange={handleForm} />
            </div>

            <input type="submit" id="button" value="Send Query" onClick={validateForm} />
          </form>
          <div class="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.223215746977!2d77.12118447328469!3d13.336386435219426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c25739ad0b7%3A0xd87476e6ff5821e4!2sGovernment%20Polytechnic!5e0!3m2!1sen!2sin!4v1687750691279!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <script type="text/javascript">
            emailjs.init('c3AKDUbdd39cDfec2')
          </script>
        </div>

      </div>
      <div class="contact_us">
        <img src={phone_icon} alt="contact no." />
        <h5 class="h5_1">Call Us on </h5>
        <h5 class="h5_2">+91 9380019642</h5>
      </div>
      <div class="email">
        <img src={Email} alt="emeil" />
        <h5 class="h5_1">Email us</h5>
        <h5 class="h5_2">agronomymaster60@gmail.com</h5>
      </div>
      <Contact_footer />
    </div>

  )
}
export default Contact;