import PostModel from "models/postModel";
import baseController from "./baseController";

class PostController extends baseController {
    constructor() {
        super(PostModel);
    }
}

export default new PostController();