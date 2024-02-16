import express from "express"
import { app } from "./api/routes";

const exp = express();

exp.use(express.json());

exp.use(app);

exp.listen(3333, () => {
    console.log('Server is running on port 3333');
})