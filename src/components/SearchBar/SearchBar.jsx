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
  };

  return (
    <div className={styledSBar.divContainer}>
      <button onClick={() => props.onSearch(Math.floor(Math.random() * 824))}>
        Random Character
      </button>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="Introduce ID..."
      />
      <button onClick={sendID}>Add Character</button>
    </div>
  );
}
