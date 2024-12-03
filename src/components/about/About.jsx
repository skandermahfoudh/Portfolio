import { Component } from "react";
import ME from "../../assets/me-about.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me"></div>
          <div className="about__content">
            <p>
              Information Technology student at ISET Nabeul, specializing in
              multimedia and web development. I have solid experience in
              front-end and mobile development, gained through successful
              internships at Atomic IT Pro, where I honed my skills in creating
              user-friendly websites and mobile applications. My passion lies in
              developing innovative digital solutions, from interactive websites
              to feature-rich mobile apps and engaging video games. As a
              dedicated video game enthusiast, I have a deep interest in both
              the technical and creative aspects of game development, including
              design, mechanics, and immersive storytelling. I am always eager
              to explore new technologies and tools to enhance my skills.
              Currently, I am seeking opportunities to expand my expertise and
              contribute to projects that challenge creativity and push
              technical boundaries.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
