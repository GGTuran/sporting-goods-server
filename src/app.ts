import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFoundError from "./app/middlewares/notFoundError";
const app: Application = express();


app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Sporting goods shop server");
});


//application route
app.use('/api',router)

//global error handler
app.use(globalErrorHandler)

//not found error handler
app.use(notFoundError)

export default app;
