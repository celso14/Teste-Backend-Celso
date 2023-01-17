import express, {Request, Response, ErrorRequestHandler} from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

import productsAPI from './routes/product.api';
import citiesAPI from './routes/city.api';


dotenv.config()
const server = express();
const port = process.env.PORT;


server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json());

server.use(productsAPI);
server.use(citiesAPI);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint not found!' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // Bad Request
    console.log(err);
    res.json({ error: 'Something wrong went!' });
}
server.use(errorHandler);

server.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});