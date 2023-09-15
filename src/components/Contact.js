import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container>
        <h2 className="text-brand text-center pt-5">Prajwal Baral</h2>
        <p className="text-white text-center">
          You can find me on these Social Media i will Reply As soon as
          possible.
        </p>
        <div className="text-center">
          <span>
            <a
              href="https://www.linkedin.com/in/prajwal-baral-549b91235/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin fs-3 icon"></i>
            </a>
          </span>
          <span className="px-3">
            <a
              href="https://www.facebook.com/profile.php?id=100070979600156"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook fs-3 icon"></i>
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/prajwal_baral01"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter fs-3 icon"></i>
            </a>
          </span>
          <span className="pb-4">
            <a
              href="https://github.com/prajwal000?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github fs-3 icon ps-3"></i>
            </a>
          </span>
        </div>
      </Container>
    </>
  );
}

export default Contact;
