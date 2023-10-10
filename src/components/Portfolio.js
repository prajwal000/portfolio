import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ImageModal from "./ImageModal";
import data from "../Data";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [demo, setDemo] = useState(null);
  const [tech, setTech] = useState(null);
  const [hub, setHub] = useState(null);

  const openImageModal = (imageSrc, info, liveDemo, github, techUsed) => {
    setSelectedImage(imageSrc);
    setDescription(info);
    setDemo(liveDemo);
    setTech(techUsed);
    setHub(github);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Container>
        <h2 className="text-brand py-5 text-center text-decoration-underline about-head">
          Portfolio
        </h2>
        <div className="row ">
          {data.map((item) => {
            return (
              <div className="col-lg-4 py-3 text-center" key={item.id}>
                <img
                  src={item.image}
                  alt=""
                  className="hover-img px-2"
                  width="400px"
                  onClick={() =>
                    openImageModal(
                      item.image,
                      item.desc,
                      item.livedemo,
                      item.github,
                      item.tech
                    )
                  }
                />
              </div>
            );
          })}
        </div>
      </Container>

      <ImageModal
        show={!!selectedImage}
        onHide={closeImageModal}
        imageSrc={selectedImage}
        info={description}
        liveDemo={demo}
        github={hub}
        techUsed={tech}
      />
    </>
  );
}

export default Portfolio;
