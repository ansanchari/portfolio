import React from 'react'
import img from "../assets/profile-pic-1.png";
import lnk from "../assets/linkedin.png";
import git from "../assets/github.png"
import rs from "../assets/resume.pdf"

const Profile = () => {
  return (
    <section id="profile">
    <div class="section__pic-container">
      <img src={img} alt="SM profile picture" />
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello, I'm</p>
      <h1 class="title">Sanchari</h1>
      <p class="section__text__p2">FullStack Developer</p>
      <div class="btn-container">
        <a href={rs} target='__blank'>
          <button
          class="btn btn-color-2"
        >
          Download Resume
        </button>
        </a>
        <button class="btn btn-color-1" onclick="location.href='./#contact'">
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img
          src={lnk}
          alt="My LinkedIn profile"
          class="icon"
          onclick="location.href='https://www.linkedin.com/in/sanchari-mukherjee-872b80258/'"
        />
        <img
          src={git}
          alt="My Github profile"
          class="icon"
          onclick="location.href='https://github.com/ansanchari'"
        />
      </div>
    </div>
  </section>
  )
}

export default Profile
