import express from 'express';
import path from 'path';

const serveStaticFiles = (app) => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    app.use(express.static(path.join(__dirname, '../public')));
};

export default serveStaticFiles;