import express, { Application, NextFunction } from "express";
import myCors from "cors";

import userRouter from "./user/infrastructure/userRouter";

const app: Application = express();
app.use(myCors());
app.use(express.json());

app.use('/user', userRouter);


app.use('/*', (req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err: Error, req: any, res: any, next: NextFunction) => {
  console.log(err);
  res.status(500).send(err.message);
});

export default app;
