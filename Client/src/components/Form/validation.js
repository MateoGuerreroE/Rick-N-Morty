const regexEmail =
  /^(?=.{1,35}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
const regexPassword = /^(?=.*\d)[a-zA-Z\d]{6,10}$/i;

export function validate(input) {
  let obj = {};

  if (!regexEmail.test(input.email)) {
    obj.email = "Escribe un email correcto";
  }
  if (!regexPassword.test(input.password)) {
    obj.password = "Debe contener un numero y estar entre 6 a 10 digitos";
  }

  return obj;
}
