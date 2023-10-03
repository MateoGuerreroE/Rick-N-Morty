import { useState } from "react";
import styledSBar from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setID] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setID(value);
  };

  const sendID = () => {
    props.onSearch(id);
    setID("");
  };

  return (
    <div className={styledSBar.divContainer}>
      <button
        className={styledSBar.button1}
        onClick={() => props.onSearch(Math.floor(Math.random() * 826))}
      ></button>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="ID..."
        className={styledSBar.inpt}
      />
      <button className={styledSBar.button2} onClick={sendID}></button>
    </div>
  );
}
