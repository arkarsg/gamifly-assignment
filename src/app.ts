import cors from "cors";
import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.use(cors()); // config cors so that front-end can use
app.options("*", cors());

app.get("/", (req: Request, res: Response) => {
    console.log("Sending Greetings!");
    res.json({
      message: "Hello World from user-service",
    });
  });
  
app.use((req: Request, res: Response, next: NextFunction) => {
  const error: Error & { status?: number} = new Error("Route Not Found");
  error.status = 404;
  next(error);
});

app.use((error: Error & { status?: number}, req: Request, res: Response) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;