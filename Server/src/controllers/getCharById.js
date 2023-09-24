let axios = require("axios");

function getCharById(res, id) {
  let character = axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((character) => {
      let characterData = {
        id: id,
        name: character.data.name,
        gender: character.data.gender,
        species: character.data.species,
        origin: character.data.origin,
        image: character.data.image,
        status: character.data.status,
      };
      return characterData;
    })
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
}

module.exports = { getCharById };
