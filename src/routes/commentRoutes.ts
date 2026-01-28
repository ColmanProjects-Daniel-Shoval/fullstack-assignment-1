import express from "express";
import commentController from "../controllers/commentController";

const router = express.Router();

router.post("/", commentController.create.bind(commentController));

export default router;
