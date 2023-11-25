import "./Resum.css";
import React, { useState } from "react";
export default function Resume() {
  const [showDetailes, setDedailes] = useState(false);
  const buttonClicked = () => {
    setDedailes(!showDetailes);
  };
  return (
    <div id="resume">
      <div className="resume-nav ">
        <div class="row education ">
          <div class="three columns ">
            <h1>
              <strong>Education</strong>
            </h1>
          </div>
          <div class="nine columns ">
            <div class="row item">
              <div class="twelve columns  p-md-5">
                <h3>University of Life</h3>
                <h2 class="info">
                  Master in MD <span>&bull;</span>
                  <em class="date">April 2023</em>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  Nullam dictum felis eu pede mollis, kjgfruin kjhggf
                </p>
                <button className="btn" onClick={buttonClicked}>
                  {showDetailes ? "Hide Detailes" : "More Details"}
                </button>
              </div>
            </div>
            {showDetailes ? (
              <div class="row item">
                <div class="twelve columns p-md-5">
                  <h3>School of Code To Inspire</h3>
                  <p class="info">
                    A. Degree in Web-Devolaper <span>&bull;</span>
                    <em class="date">Oct 2022</em>
                  </p>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    mauris vitae erat
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
