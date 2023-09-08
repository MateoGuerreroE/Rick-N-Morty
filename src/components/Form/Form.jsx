import { useState } from "react";
import { validate } from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });

    setErrors(
      validate({
        ...userData,
        [event.target.id]: event.target.value,
      })
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.login(userData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input
          type="text"
          placeholder="Email..."
          value={userData.email}
          id="email"
          onChange={handleChange}
        />
        <p>{errors.email ? errors.email : null}</p>
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Clave..."
          value={userData.password}
          id="password"
          onChange={handleChange}
        />
        <p>{errors.password ? errors.password : null}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
