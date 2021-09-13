const Joke = require("../models/jokes.model");

module.exports.findAll = (req, res) => {
    Joke.find()
        .then(el => res.json({ jokes: el }))
        .catch(err => res.json({ message: "Algo salió mal!", error: err }));
}

module.exports.findById = (req, res) => {
    Joke.findById({ _id: req.params.id })
        .then(el => res.json({ joke: el }))
        .catch(err => res.json({ message: "Algo salió mal!", error: err }));
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ newJoke: newJoke }))
        .catch(err => res.json({ message: "Error", error: err }));
}

module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(upJoke => res.json({ upJoke: upJoke }))
        .catch(err => res.json({ message: "Error al actualizar", error: err }));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.jso({ result: result }))
        .catch(err => res.json({ message: "Error al eliminar", error: err }));
}

