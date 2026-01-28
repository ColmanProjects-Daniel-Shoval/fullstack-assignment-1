import { Router } from 'express';
import postController from '../controllers/postController';

const postRouter = Router();

postRouter.post("/", postController.create.bind(postController));

export default postRouter;