import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env",
});

// Using middleware

app.use(express.json());// this must first line of middleware
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods :["GET","POST","PUT","DELETE"],
    credentials: true,
}))
//using routes->users
app.use("/api/v1/users",userRouter);
//using routes ->task
app.use("/api/v1/task",taskRouter);


app.get("/",(req,res) =>{
   res.send("Nice Working");
});
//usign error Middleware
app.use(errorMiddleware);
 