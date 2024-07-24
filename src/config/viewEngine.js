import * as path from 'path';
import express from 'express';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    // config static file
    app.use(express.static(path.join('./src', 'public')));
};

export { configViewEngine };
