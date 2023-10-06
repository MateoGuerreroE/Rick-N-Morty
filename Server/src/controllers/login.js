const { User } = require("../DB_connection");

const activeUser = null;

async function login(req, res) {
  try {
    const { email, password } = req.query;
    if (email && password) {
      const response = await User.findOne({ where: { email: email } });
      if (!response) res.status(404).send("Usuario no encontrado");
      const { dataValues } = response;
      if (dataValues.password === password) res.json({ access: true });
      else res.status(403).send("Contraseña incorrecta");
    } else res.status(400).send("Faltan datos");
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = login;
