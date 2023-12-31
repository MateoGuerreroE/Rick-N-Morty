const server = require("./app");
const PORT = 3001;
const { sequelize } = require("./DB_connection");

server.listen(PORT, async () => {
  await sequelize.sync({ force: false });
  console.log("Server raised in port: " + PORT);
});
