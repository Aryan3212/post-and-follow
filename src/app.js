import express from "express";
import v1Routes from "./routes/v1/index.js";
import morgan from "morgan";
import { initializeDatabase } from "./repository/index.js";

initializeDatabase();
const router = new express.Router();
router.use('/v1', v1Routes);
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(router)


export default app;