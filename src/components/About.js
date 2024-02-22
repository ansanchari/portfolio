import React from 'react'

const About = () => {
  return (
    <section id="about">
    <p class="section__text__p1">Get To Know More</p>
    <h1 class="title">About Me</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <img
          src="./assets/about-pic.png"
          alt="Profile picture"
          class="about-pic"
        />
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <img
              src="./assets/experience.png"
              alt="Experience icon"
              class="icon"
            />
            <h3>Experience</h3>
            <p>2nd Year student, kickstarting her career<br/>with dedicated learning attitude <br />WEB DEVELOPER</p>
          </div>
          <div class="details-container">
            <img
              src="./assets/education.png"
              alt="Education icon"
              class="icon"
            />
            <h3>Education</h3>
            <p>Pursuing B.Tech in CSE<br />Institute of Engineering and Management<br/> Kolkata</p>
          </div>
        </div>
        <div class="text-container">
          <p>
            I am a driven Computer Science and Engineering (CSE) undergraduate with a profound interest in web and software development. My journey in this field began with a fascination for the interconnectedness of the web and its potential to create meaningful experiences. Proficient in HTML, CSS, and JavaScript, I specialize in crafting visually appealing and functional web solutions, leveraging frameworks like React.js. Through coursework and personal projects, I have cultivated a solid foundation in software engineering principles, enabling me to contribute effectively to collaborative projects and architect scalable systems. A natural problem-solver, I thrive on challenges, continuously seeking opportunities to learn and grow in this ever-evolving industry. I am eager to connect with professionals who share my passion and explore new avenues for innovation and collaboration in web and software development. Let's code the future together!
          </p>
        </div>
      </div>
    </div>
    <img
      src="./assets/arrow.png"
      alt="Arrow icon"
      class="icon arrow"
      onclick="location.href='./#experience'"
    />
  </section>
  )
}

export default About
