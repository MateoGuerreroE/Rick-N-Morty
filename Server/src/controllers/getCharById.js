const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const id = req.params.id;
  axios
    .get(URL + id)
    .then(({ data }) => {
      const { id, status, name, species, origin, image, gender } = data;
      const character = { id, status, name, species, origin, image, gender };
      if (character.name) {
        return res.json(character);
      }
      res.status(404).send("Not found");
    })
    .catch((error) => res.status(500).send(error.message));
}

module.exports = getCharById;
