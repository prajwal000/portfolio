import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <section className="py-4 about">
          <h1 className="text-brand text-center text-decoration-underline about-head py-5 font">
            About
          </h1>
          <div className="row py-5 align-items-center">
            <div className="col-lg-6 text-center">
              <img src="assets/myphoto.png" alt="" width="300px" className="" />
            </div>
            <div className="col-lg-6">
              <h2 className="gradient-text pt-4 font">React Developer</h2>
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
            I'm a React developer with a year of professional experience. My
            expertise lies in crafting dynamic web applications with a strong
            focus on responsive UI design and robust state management. My skill
            set encompasses JavaScript, HTML, CSS, React's component-based
            architecture, state management using Redux, and integrating APIs. I
            thrive in collaborative environments, working closely with diverse
            teams to deliver high-quality web solutions. I'm dedicated to
            continuous learning and staying updated with the latest React
            developments, allowing me to consistently contribute to innovative
            and user-centric projects. My technical proficiency, commitment to
            user-centric design, adaptability, and dedication to ongoing
            learning make me an asset to any development team. I look forward to
            applying my skills and expertise to tackle exciting challenges and
            deliver outstanding user-focused solutions in the ever-evolving
            landscape of React development.
          </div>
        </section>
      </Container>
    </>
  );
}

export default About;
