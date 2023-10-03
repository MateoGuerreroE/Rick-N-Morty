const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  try {
    const ID = req.params.id;
    const character = await axios.get(URL + ID);
    const { id, status, name, species, origin, image, gender, episode } =
      character.data;
    let charData = {
      id,
      status,
      name,
      species,
      origin,
      image,
      gender,
      episode,
    };
    if (charData.name) {
      return res.json(charData);
    }
    res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getCharById;
