import React from "react";
import Connect from "../../assets/images/optimized/connect.webp";
import emailjs from "emailjs-com";
import css from "./ContactUs.module.css"; // Importing the CSS module

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function ContactUs() {

  useGSAP(()=>{
    gsap.from("#contact" , {
      opacity : 0,
      y : 50,
      scrollTrigger : {
        start : "top 80%",
        trigger : "#contact",
      }
    })
  })
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const phone = form.elements.phone.value;

    if (!name || !email || !message) {
      console.log("Please add Name, Email, and Message");
      return;
    }

    const templateParams = {
      to_name: "Anurag",
      from_name: name,
      message: message,
      contact: phone,
      email: email,
      reply_to: email,
    };

    if (
      !process.env.REACT_APP_SERVICE_KEY ||
      !process.env.REACT_APP_TEMPLETID ||
      !process.env.REACT_APP_PUBLIC_KEY
    ) {
      console.log("Please After Some Time.");
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLETID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!");
          console.log(response.status);
          console.log(response.text);
          form.reset(); // Clear form after submission
        },
        (err) => {
          console.log("FAILED...");
          console.log(err);
        }
      );
  };

  return (
    <section className={css.contact} id="contact">
      <h2 className={css.heading}>
        <i className="fas fa-headset"></i>
        <span style={{ color: "white" }}>Get in</span>
        <span style={{ color: "yellow" }}>Touch</span>
      </h2>

      <div className={css.container}>
        <div className={css.content}>
          <div className={css.imageBox}>
            <img
              draggable="false"
              src={Connect}
              alt="Connect"
              style={{ borderRadius: "10px", width: "85%" }}
            />
          </div>

          <form id="contact-form" onSubmit={handleSubmit}>
            <div className={css.formGroup}>
              <div className={css.field}>
                <input type="text" name="name" placeholder="Name" required />
                <i className="fas fa-user"></i>
              </div>
              <div className={css.field}>
                <input type="text" name="email" placeholder="Email" required />
                <i className="fas fa-envelope"></i>
              </div>
              <div className={css.field}>
                <input type="text" name="phone" placeholder="Phone" />
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className={css.message}>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className={css.buttonArea}>
              <button type="submit">
                Submit <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
