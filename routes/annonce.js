const express = require("express");
const router = express.Router();

const {
  createAnnonce,
  getAnnonce,
  getAllAnnonces,
  deleteAnnonce,
  updateAnnonce,
} = require("../controller/controllAnnonce");

router.route("/").get(getAllAnnonces).post(createAnnonce);
router.route("/:id").get(getAnnonce).delete(deleteAnnonce).patch(updateAnnonce);

module.exports = router;
