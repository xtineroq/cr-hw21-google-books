const db = require("../models");
const axios = require("axios");

module.exports = {
  // API from backend
  searchApi: (req, res) => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=kahneman")
      .then((response) => res.json(response.data))
      .catch((err) => res.status(422).json(err));
  },

  // find all books saved in database
  findAll: (req, res) => {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // find book by id
  findById: (req, res) => {
    db.Book.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // save book to database
  save: (req, res) => {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Book.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // delete book from database
  remove: (req, res) => {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
