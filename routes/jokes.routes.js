const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", JokeController.findAll);
    app.get("/api/jokes/:id", JokeController.findById);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.put("/api/users/update/:id", JokeController.updateJoke);
    app.delete("/api/users/delete/:id", JokeController.deleteJoke)

}