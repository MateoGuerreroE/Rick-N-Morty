const { Favorite, user_favorites } = require("../DB_connection");

async function postFav(req, res) {
  const { name, origin, status, image, species, gender, id } = req.body;
  try {
    if (name && origin.name && status && image && species && gender && id) {
      await Favorite.findOrCreate({
        where: {
          id: id,
          name: name,
          origin: origin.name,
          status: status,
          image: image,
          species: species,
          gender: gender,
        },
      });
      user_favorites.findOrCreate({ where: { FavoriteId: id, UserId: 1 } });

      const allFavs = await Favorite.findAll();
      res.json(allFavs);
    } else res.status(401).send("Faltan datos");
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = postFav;
