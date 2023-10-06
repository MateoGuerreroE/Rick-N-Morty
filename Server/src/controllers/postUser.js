const { User } = require("../DB_connection");

async function postUser(req, res) {
  const { email, password } = req.body;
  try {
    if (email && password) {
      await User.findOrCreate({ where: { email: email, password: password } });
      res.send("Usuario agregado exitosamente");
    } else res.status(400).send("Faltan datos");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = postUser;
