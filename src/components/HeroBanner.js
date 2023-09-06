import { Container } from "react-bootstrap";

const HeroBanner = () => {
  return (
    <>
      <Container>
        <div className="Hero_banner text-center">
          <div>
            <h1 className="fw-bolder heading-font animate-charcter">
              PRAJWAL <br />
              BARAL
            </h1>
            <div className="banner_2 mt-4">
              I am a
              <div className="flip">
                <div>
                  <div className="gradient-text">Web Designer</div>
                </div>
                <div>
                  <div className="gradient-text">Web Developer</div>
                </div>
                <div>
                  <div className="gradient-text">FreeLancer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default HeroBanner;
