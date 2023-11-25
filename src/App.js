import "./css/media-queries.css";

import Ck from "./images/a.jpg";
import Hh from "./images/entertain.JPG";

import J from "./images/game.jpg";
import h1 from "./images/c.png";
import js from "./images/js1.jpg";
import w from "./images/b.png";
import r from "./images/re2.png";
import cc from "./images/c.png";

import MyCv from "./images/header.jpg";
import Button from "./images/mycv.jpg";
import pp from "./images/Aspirin.png";

/*<---   importing parents components of my portfolo         
   ----- > */
import Header from "./Components/HeaderComponents/Header";
import Resume from "./Components/ResumComponent/Resume";
import MySkill from "./Components/SkillComponent/MySkill";
import About from "./Components/AboutComponent/About";
import Contact from "./Components/ContactComponent/Contact";
import Project from "./Components/ProjectComponent/Project";

import Footer from "./Components/ContactComponent/Footer";

/*<---   an array of the navbar and linking page       
      ----- > */

export const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Resume",
    link: "resume",
  },
  {
    id: 4,
    title: "Skill",
    link: "skill",
  },
  {
    id: 5,
    title: "Project",
    link: "project",
  },
  {
    id: 6,
    title: "Contact",
    link: "contact",
  },
];

const detail = [
  {
    id: 1,
    percentage: "100",
    title: "HTML",
    project: h1,
  },
  {
    id: 2,
    percentage: "98",
    title: " CSS➡",
    project: cc,
  },
  {
    id: 3,
    percentage: "90",
    title: "BStrap",
    project: w,
  },
  {
    id: 4,
    percentage: "85",
    title: "jScript",
    project: r,
  },
  {
    id: 5,
    image: J,
    percentage: "80",
    title: "React",
    project: js,
  },
];

const deta = [
  {
    id: 1,
    image: MyCv,
    title: "My CV",
    adress: "https://github.com",
  },
  {
    id: 2,
    image: Button,
    title: "Button Game",
    adress: "https://github.com",
  },
  {
    id: 3,
    image: pp,
    title: "Pharmacy App",
    adress: "https://github.com",
  },
];
const aboutme = [
  {
    id: 1,
    image: Ck,
    favorite: "Aisha",
    review:
      " i can sey tjat it's tne mosy beuatiful verssion of myself that i wanna enhance yhat",
  },

  {
    id: 2,
    image: Hh,
    favorite: "pharmacy project",
    review: " i can sey tjat it's tne mosy beuatiful verssion of myse",
  },
];
function App() {
  return (
    <div>
      <Header Links={navLinks} />
      <About about={aboutme} />
      <Resume />
      <MySkill item={detail} />
      <Project deta={deta} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
