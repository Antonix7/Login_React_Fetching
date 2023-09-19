import express, { json } from 'express';
import router from './routes/autho.routes';

const app = express();
const port = 3000;
app.use(express.json());
app.use(router);

app.listen(port, () => { 
    console.log(`server on port: http://localhost:5173:${port}`);
});