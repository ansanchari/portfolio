import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
    <p class="section__text__p1">Get in Touch</p>
    <h1 class="title">Contact Me</h1>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <img
          src="./assets/email.png"
          alt="Email icon"
          class="icon contact-icon email-icon"
        />
        <p><a href="mailto: msanchari36@gmail.com">msanchari36@gmail.com</a></p>
      </div>
      <div class="contact-info-container">
        <img
          src="./assets/linkedin.png"
          alt="LinkedIn icon"
          class="icon contact-icon"
        />
        <p><a href="https://www.linkedin.com/in/sanchari-mukherjee-872b80258/">LinkedIn</a></p>
      </div>
    </div>
  </section>
  )
}

export default Contact
