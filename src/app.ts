import 'dotenv/config';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log('my Server!!');
});
