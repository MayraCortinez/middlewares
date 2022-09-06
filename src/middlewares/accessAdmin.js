const { admin } = require("../controllers/mainController");

const admins = ["ada", "greta", "vim", "tim"];

const accessAdmin = (req, res, next) => {
  if (!req.query.user) {
    return res.redirect("/");
  }

  if (admins.includes(req.query.user.toLowerCase())) {
    next();
  } else {
    return res.redirect("/noEntry");
  }
};

module.exports = accessAdmin;
