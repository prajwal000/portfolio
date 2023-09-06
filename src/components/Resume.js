import React from "react";
import { Container } from "react-bootstrap";

function Resume() {
  return (
    <>
      <Container>
        <h2 className="text-brand py-5 text-center text-decoration-underline about-head">
          Resume
        </h2>
        <div className="row">
          <div className="col-lg-6 p-5">
            <h4 className="text-white pb-4 ">Summary</h4>
            <p className="text-white ">
              As a proficient Frontend and React Developer with nearly a year of
              experience, I have gained a solid foundation in web development
              and a strong proficiency in front-end technologies including HTML,
              CSS, and JavaScript. I am skilled in building modern, responsive,
              and interactive user interfaces using the React library.
            </p>
            <h4 className="text-white pb-4 ">Education</h4>
            <div>
              <h6 className="bolder gradient-text">
                Bachelor of Science in Computer Science and Information
                Technology
              </h6>
              <span className="text-white">2020-Present</span>
              <br />
              <span className="text-white">Ambition College</span>
              <br />
              <span className="text-white">Baneshwor,Kathmandu</span>
            </div>
            <div className="py-4">
              <h6 className="bolder gradient-text">SCHOOL LEVEL EDUCATION</h6>
              <span className="text-white">2018-2020</span>
              <br />
              <span className="text-white">
                Kanchanjunga Higher Secondary School
              </span>
              <br />
              <span className="text-white">Birtamode,Jhapa</span>
            </div>
          </div>
          <div className="col-lg-6 p-5">
            <h4 className="text-white pb-4">Personal Experience</h4>
            <div>
              <h6 className="bolder gradient-text">Front-End Developer</h6>
              <span className="text-white">July 2022-Dec 2022</span>
              <br />
              <span className="text-white">Star Company pvt.ltd</span>
              <br />
              <li className="text-white">
                Worked here as a Jr.Front-End Developer creating websites with
                HTML,CSS & JS.
              </li>
              <li className="text-white">
                Designed &Developed Multiple Websites
              </li>
            </div>

            <div className="pt-4">
              <h6 className="bolder gradient-text">React Developer</h6>
              <span className="text-white">May 2023 - Aug 2023</span>
              <br />
              <span className="text-white">Satyal Publications</span>
              <br />
              <li className="text-white">
                Worked here as a React developer and created the responsive
                website with React.
              </li>
              <li className="text-white">Code Quality and Maintainability</li>
              <li className="text-white">
                Created responsive design for mobile devices as well.
              </li>
              <li className="text-white">Worked with APIs</li>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Resume;
