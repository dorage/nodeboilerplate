import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import session from 'express-session';

import './db';
import mainRouter from './router/main';
import { configs } from './config';

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    session({
        secret: configs.cookieSecret,
        resave: true,
        saveUninitialized: false,
    }),
);

app.use(mainRouter);

export default app;
