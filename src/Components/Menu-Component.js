import * as React from "react";
import './Menu-Component.css';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "./car1.jpg";
import slide2 from "./car2.jpg";
import slide3 from "./car3.jpg";
import slide4 from "./car4.jpg";
import slide5 from "./car5.jpg";
import slide6 from "./car6.jpg";

export default class Menu extends React.Component {
    render(){
        return (
            <div className="App">
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={slide1} alt="slide" />
            </div>
            <h2>Our Gallery</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={slide2} alt="slide" />
            </div>
            <h2>Our Gallery</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={slide3} alt="slide" />
            </div>
            <h2>Our Gallery</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={slide4} alt="slide" />
            </div>
            <h2>Our Gallery</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={slide5} alt="slide" />
            </div>
            <h2>Our Gallery</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={slide6} alt="slide" />
            </div>
            <h2>Our Gallery</h2>
          </div>
        </Fade>
      </div>
    </div>
          );
    }
}