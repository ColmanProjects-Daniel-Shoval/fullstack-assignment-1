import express from "express";
import commentController from "../controllers/commentController";

const router = express.Router();

router.post("/", commentController.create.bind(commentController));
router.get("/:id", commentController.getById.bind(commentController));
router.put("/:id", commentController.put.bind(commentController));

export default router;
