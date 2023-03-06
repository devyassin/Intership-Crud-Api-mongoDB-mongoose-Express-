const mongoose = require("mongoose");

const AnnonceShema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "u must add a title"],
    maxlength: [100, "title must not be more than 100 chars"],
  },
  domaine: {
    type: String,
    required: [true, "u must add a domaine"],
    maxlength: [20, "domaine must not be more than 20 chars"],
  },
  description: {
    type: String,
    required: [true, "u must add a description"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Annonce", AnnonceShema);
