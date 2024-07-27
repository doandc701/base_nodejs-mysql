import * as path from 'path';
import express from 'express';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const configViewEngine = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    // config static file
    app.use(express.static(path.join('./src', 'public')));
    app.use('/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));
    app.use('/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')));
};

export { configViewEngine };
