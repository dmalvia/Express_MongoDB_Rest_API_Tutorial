import * as express from "express";
import { getAuth, deleteAuth, addAuth, updateAuth} from "../controllers/authController/index";

const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();
router.delete("/delete",validateToken, deleteAuth);

router.post("/add",validateToken, addAuth);

router.get("/get",validateToken, getAuth);


router.put("/update",validateToken, updateAuth);


module.exports = router;


