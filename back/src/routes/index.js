const { Router } = require("express")
const { getCharById} = require("../controllers/getCharById");
const { getCharDetail} = require("../controllers/getCharDetail");
const { postFav, getFav, deleteFav} = require("../controllers/favs")

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/fav", postFav);
router.get("/fav", getFav );
router.delete("/fav", deleteFav);

module.exports = router;


