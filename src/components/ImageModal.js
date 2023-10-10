import React from "react";
import { Modal } from "react-bootstrap";

function ImageModal(props) {
  const { show, onHide, imageSrc, info, liveDemo, github, techUsed } = props;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <div className="text-end py-3">
          <span onClick={onHide}>
            <i className="bi bi-x-lg text-brand"></i>
          </span>
        </div>
        <img src={imageSrc} alt="" className="img-fluid" />
        <div className="text-white sub-text pt-4"> {info}</div>
        <div className="text-white py-3">
          <a href={liveDemo} target="_blank" rel="noreferrer">
            <button className="btn-brand2">See Live</button>
          </a>
          {!github.length < 1 ? (
            <>
              <a
                href={github}
                className="ms-4"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-brand2">View Code</button>
              </a>
            </>
          ) : (
            <></>
          )}
          <div className="py-3">
            Technology Used: <span className="ms-3 text-brand">{techUsed}</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ImageModal;
