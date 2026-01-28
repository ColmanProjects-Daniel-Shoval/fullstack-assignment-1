import { Router } from 'express';
import postController from '../controllers/postController';

const postRouter = Router();

postRouter.get("/", postController.get.bind(postController));
postRouter.post("/", postController.create.bind(postController));

export default postRouter;