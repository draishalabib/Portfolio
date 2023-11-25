import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { FaTwitter, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function HeaderText() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer ", "UI Designer ", "Expert Coder "],
    Loop: false,
    typeSpeed: 70,
    deLeteSpeed: 10,
    deLaySpeed: 2000,
  });
  return (
    <div className="banner">
      <div class="banner-text">
        <h1>
          Hi, I'm <span> Aisha Labib </span>
        </h1>
        <h2>
          <span> a {text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="...\"
            cursorColor="#ffca46dc"
          />
        </h2>
        <p>
          i'm not adding Codes just to build sites ,lorem ipsum themconsectetuer
          adipiscing
        </p>
        <h4>
          <strong>Find Me In</strong>
        </h4>
      </div>
      <div className="banner-icon">
        <a href="https://twitter.com" style={{ color: "blue" }}>
          <FaTwitter className="icon" />
        </a>
        <a href="https://instagram.com" style={{ color: "red" }}>
          <FaInstagram className="icon" />
        </a>
        <a href="https://whatsup.com" style={{ color: "chartreuse" }}>
          <FaWhatsapp className="icon" />
        </a>
        <a href="https://github.com" style={{ color: "blueviolet" }}>
          <FaGithub className="icon" />
        </a>
        <div>
          <span>{` <  /  >`}</span>
        </div>
      </div>
    </div>
  );
}
