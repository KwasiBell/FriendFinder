ar path = require("path");

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../FriendFinder/public/survey.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../FriendFinder/public/home.html"));
  });
};
