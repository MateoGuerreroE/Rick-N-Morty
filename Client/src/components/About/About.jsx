import styledAbout from "./About.module.css";
import image from "../../content/IMG_5728.JPG";
import gitLogo from "../../content/25231.png";
import whaLogo from "../../content/whatsapp.png";
import linkLogo from "../../content/linkedin.png";

export default function About(param) {
  function onClick(event) {
    if (event.target.id === "git") {
      window.open("https://github.com/MateoGuerreroE");
    } else if (event.target.id === "wha") {
      window.open("https://wa.link/d2buea");
    } else if (event.target.id === "link") {
      window.open(
        "https://www.linkedin.com/in/mateo-felipe-guerrero-espinosa-03a162157"
      );
    }
  }

  return (
    <div className={styledAbout.container}>
      <div className={styledAbout.card}>
        <img src={image} alt="Mateo" style={{ width: "100%" }} />
        <h2 className={styledAbout.title}>Mateo Felipe Guerrero Espinosa</h2>
        <h3>FG Capital CEO</h3>
        <p>Saint Leo University</p>
        <p>Henry Student</p>
      </div>
      <div className={styledAbout.buttons}>
        <img id="git" src={gitLogo} alt="github logo" onClick={onClick} />
        <img id="wha" src={whaLogo} alt="github logo" onClick={onClick} />
        <img id="link" src={linkLogo} alt="github logo" onClick={onClick} />
      </div>
    </div>
  );
}
