const user = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;

  let access = false;

  user.forEach((user) => {
    if (user.email === email && user.password === password) access = true;
  });

  return res.json({ access });
}

module.exports = login;
