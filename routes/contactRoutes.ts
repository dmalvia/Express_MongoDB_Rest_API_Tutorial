import * as express from "express";
const router = express.Router();
import { getContacts, createContact, getContact, updateContact, deleteContact, deleteContacts } from "../controllers/contactController/index";
const validateToken = require("../middleware/validateTokenHandler");


router.get("/",validateToken, getContacts);

router.get("/:id",validateToken, getContact);

router.post("/",validateToken, createContact);

router.put("/:id",validateToken, updateContact);

router.delete("/:id",validateToken, deleteContact);

router.delete("/",validateToken, deleteContacts);

module.exports = router;



