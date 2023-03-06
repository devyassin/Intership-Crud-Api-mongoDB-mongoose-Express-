const Annonce = require("../model/annonce");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllAnnonces = asyncWrapper(async (req, res) => {
  const annonces = await Annonce.find({});
  res.status(201).json({ size: annonces.length, annonces });
});

const createAnnonce = asyncWrapper(async (req, res) => {
  const annonce = await Annonce.create(req.body);
  console.log(req.body);
  res.status(201).json(annonce);
});

const getAnnonce = asyncWrapper(async (req, res) => {
  const annonce = await Annonce.find({ _id: req.params.id });
  if (!annonce) {
    return res
      .status(404)
      .json({ message: "Object not Fond !", id: req.params.id });
  }
  res.status(201).json(annonce);
});

const updateAnnonce = asyncWrapper(async (req, res) => {
  const annonce = await Annonce.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );

  if (!annonce) {
    return res.status(404).json({ message: "Object not found !" });
  }
  res.status(404).json(annonce);
});

const deleteAnnonce = asyncWrapper(async (req, res) => {
  const annonce = await Annonce.findOneAndDelete({ _id: req.params.id });
  if (!annonce) {
    return res.status(404).json({ message: "Object not Found !" });
  }
  res.status(201).json(annonce);
});

module.exports = {
  createAnnonce,
  getAnnonce,
  getAllAnnonces,
  deleteAnnonce,
  updateAnnonce,
};
