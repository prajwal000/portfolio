import React from "react";
import { Container } from "react-bootstrap";

function Skills() {
  return (
    <>
      <Container>
        <h2 className="text-brand py-5 text-center text-decoration-underline about-head">
          Skills
        </h2>

        <div className="row ">
          <div className="col-lg-6 p-5">
            <div className="py-3">
              <p className="text-white">HTML</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-brand"
                  style={{ width: "95%" }}
                />
              </div>
            </div>
            <div className="py-3">
              <p className="text-white">CSS</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-brand"
                  style={{ width: "87%" }}
                />
              </div>
            </div>
            <div className="py-3">
              <p className="text-white">Javascript</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-brand"
                  style={{ width: "88%" }}
                />
              </div>
            </div>
            <div className="py-3">
              <p className="text-white">Wordpress</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-brand"
                  style={{ width: "87%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-5">
            <div className="py-3">
              <p className="text-white">React</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-brand"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div className="py-3">
              <p className="text-white">Bootstrap,Tailwind</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-brand"
                  style={{ width: "95%" }}
                />
              </div>
            </div>
            <div className="py-3">
              <p className="text-white">JQuery</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-brand"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
