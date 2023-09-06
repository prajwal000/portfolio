import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <section className="py-4">
          <h1 className="text-brand text-center text-decoration-underline about-head py-5 font">
            About
          </h1>
          <div className="row py-5 align-items-center">
            <div className="col-lg-6 text-center">
              <img src="assets/myphoto.png" alt="" width="300px" className="" />
            </div>
            <div className="col-lg-6">
              <h2 className="gradient-text  font">React Developer</h2>
              <h5 className="text-white pt-4 font">Personal Details :</h5>
              <p className="font text-white">
                Email: Prajwalbaral001@gmail.com
                <br />
                Phone: +9779863614398
                <br />
                Location: Kathmandu,Nepal
                <br />
                Freelance: <span className="gradient-text ps-3">Available</span>
              </p>
            </div>
          </div>
          <div className="text-white text-container">
            I'm a React developer with a year of experience. I specialize in
            building dynamic web applications, focusing on creating responsive
            user interfaces and efficient state management. My skills include
            proficiency in JavaScript, HTML, CSS, React's component-based
            architecture, state management, and integrating third-party
            libraries and APIs. I've collaborated with cross-functional teams
            and stay up-to-date with the latest React trends. My passion for
            creating exceptional web experiences drives me to excel in my role.
          </div>
        </section>
      </Container>
    </>
  );
}

export default About;
