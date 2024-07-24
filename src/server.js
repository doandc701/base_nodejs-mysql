import express from 'express';
import 'dotenv/config';
import { configViewEngine } from './config/viewEngine.js';
import webRoutes from './routes/web.js';

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;

configViewEngine(app);

app.use('/', webRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
