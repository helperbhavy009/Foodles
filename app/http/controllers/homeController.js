const Item = require("../../models/menu");
function homeController() {
  return {
    async index(req, res) {
      const pizzas = await Item.find();
      return res.render("home", { pizzas: pizzas });
    },
  };
}

module.exports = homeController;
