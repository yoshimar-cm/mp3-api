const {Router} = require("express");

const uploadMiddleware = require('../../utils/hendleStorage');
const StorageController = require('../../controllers/StorageController');

const router = Router();





router.post("/",uploadMiddleware.single("myfile"),StorageController.postItem);


module.exports = router;