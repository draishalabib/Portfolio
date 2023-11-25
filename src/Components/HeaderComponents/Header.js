import React from "react";
import "./Header.css";
import HeaderText from "./HeaderText";
import { Link } from "react-scroll";
export default function Header(props) {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a class="mobile-btn" href="#nav-wrap" title="Show navigation ">
          Show navigation
        </a>
        <a class="mobile-btn" href="#nav-wrap" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" class=" nav">
          {props.Links.map(({ id, title, link }) => (
            <li className="links" key={id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <HeaderText />
    </header>
  );
}
