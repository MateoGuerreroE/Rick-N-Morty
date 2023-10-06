const { Favorite } = require("../DB_connection");

async function deleteFav(req, res) {
  const { id } = req.params;
  try {
    await Favorite.destroy({ where: { id: id } });
    const allFavs = await Favorite.findAll();
    res.json(allFavs);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = deleteFav;
