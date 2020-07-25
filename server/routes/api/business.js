const router = require("express").Router();
const businessController = require("../../controllers/businessController");

router
  .route("/")
  .get(businessController.findAll)
  .post(businessController.create);

router.route("/:search").get(businessController.findViaSearch);

router.route("/:id").get(businessController.findById);

module.exports = router;