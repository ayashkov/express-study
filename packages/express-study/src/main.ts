import express, { Request, Response } from 'express';
import { PORT } from './config';

const app = express();
const port = process.env['PORT'] ?? PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
