import { Request, Response } from "express";
import baseController from "./baseController";
import PostModel from "models/postModel";
import CommentModel from "models/commentModel";

class CommentController extends baseController {
    constructor() {
        super(CommentModel);
    }

    async create(req: Request, res: Response) {
        const postId = req.body.postId;
        try {
            const post = await PostModel.findById(postId);
            if (!post) {
                res.status(404).json({ error: "Post not found" });
                return;
            }
            super.create(req, res);
        } catch (error) {
            console.log(error);
            res.status(500).send("An unknown error occurred while verifying post existence");
        }
    }

}


export default new CommentController();