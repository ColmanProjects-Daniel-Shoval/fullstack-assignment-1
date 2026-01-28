import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { config } from "config/config";
import commentsRouter from "./routes/commentRoutes";
import postRouter from "routes/postRoute";
import cors from "cors";


dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/comment', commentsRouter);
app.use('/posts', postRouter);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const initApp = () => {
    return new Promise<Express>((resolve, reject) => {

        if (!config.DATABASE_URL) {
            reject("DATABASE_URL is not defined in .env file");
        } else {
            mongoose
                .connect(config.DATABASE_URL)
                .then(() => {
                    resolve(app);
                })
                .catch((error) => {
                    reject(error);
                });
        }
    });
};

export default initApp;
