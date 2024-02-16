import { Router } from "express";
import { companiesApp } from "../modules/companies/companiesRoutes";
import { jobApp } from "../modules/job/jobRoutes";

const bodyParser = require('body-parser');

const app = Router();
app.use(bodyParser.json());

app.use([
  companiesApp,
  jobApp
])

app.get('/api/ping', (req, res) =>
  res.status(200).json({
    message: 'Running! ⚡️',
  }),
);

export { app };

