import { findAll, create } from "../controllers/cats.controller.js";
import express from "express";

const router = express.Router();

router.get("/cats", findAll);
router.post("/cats", create);

export default router;
