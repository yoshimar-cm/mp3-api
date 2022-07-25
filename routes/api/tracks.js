const {Router} = require("express");
const TracksController = require('../../controllers/TracksController');
const {validatorCreateItem} = require('../../validators/tracks');

const router = Router();

router.get("/",TracksController.getItems);
router.get("/:id",TracksController.getItem);
router.post("/create",validatorCreateItem,TracksController.postItem);
router.put("/update/:id",TracksController.putItem);
router.delete('/delete/:id',TracksController.deleteItem);

module.exports = router;