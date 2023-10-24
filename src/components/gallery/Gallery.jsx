import { useState, useEffect } from "react";
import "./gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import IMGS from "./imagesInfo";

function Gallery() {
  let noVal = 0;
  const [file, setFile] = useState(noVal);
  
  let currentIndex = file.index;
  const goToNext = () => {
    if (currentIndex === IMGS.length - 1) {
      setFile(IMGS[0]);
    } else {
      setFile(IMGS[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex === 0) {
      setFile(IMGS[IMGS.length - 1]);
    } else {
      setFile(IMGS[currentIndex - 1]);
    }
  };

  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === "hidden");
  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked, bodyStyle]);

  function toggle() {return setIsLocked(!isLocked)}

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">GALLERY</h1>
      <div className="media-container">
        {IMGS.map((image, index) => {
          return (
            <div className="media" key={index} onClick={() => {setFile(image); toggle()}}>
              <img src={image.img} alt={index}></img>
            </div>
          );
        })}
        <div
          className="popup-media"
          style={{ display: file ? "block" : "none" }}
        >
          <span onClick={() => {setFile(noVal); toggle()}}>&times;</span>
          <div className="left-arrow" onClick={goToPrev}>
            <FontAwesomeIcon className="arrow-icon" icon={faAngleLeft} />
          </div>
          <img
            src={file.img}
            alt={file.id}
            style={{ borderRadius: "5px" }}
          ></img>
          <div className="right-arrow" onClick={goToNext}>
            <FontAwesomeIcon
              className="arrow-icon"
              icon={faAngleLeft}
              flip="horizontal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

