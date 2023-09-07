import styledAbout from "./About.module.css";
import image from "../../content/IMG_5728.JPG";

export default function About(param) {
  return (
    <div className={styledAbout.card}>
      <img src={image} alt="Mateo" style={{ width: "100%" }} />
      <p className={styledAbout.title}>FG Capital Founder & CEO</p>
      <p>Saint Leo University</p>
      <p>
        <button>Contact</button>
      </p>
    </div>
  );
}
