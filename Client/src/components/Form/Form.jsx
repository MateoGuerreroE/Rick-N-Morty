import { useState } from "react";
import { validate } from "./validation";
import styledForm from "./Form.module.css";

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
    <div className={styledForm.container}>
      <form className={styledForm.form} onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input
          type="text"
          placeholder="Email..."
          value={userData.email}
          id="email"
          onChange={handleChange}
          className={styledForm.input}
        />
        <p className={styledForm.text}>{errors.email ? errors.email : null}</p>

        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Clave..."
          value={userData.password}
          id="password"
          onChange={handleChange}
          className={styledForm.input}
        />
        <p className={styledForm.text}>
          {errors.password ? errors.password : null}
        </p>
        <button type="submit" className={styledForm.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
