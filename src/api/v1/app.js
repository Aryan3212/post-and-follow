import express from "express";
import routes from "./routes/index.js";
import morgan from "morgan";
import { initializeDatabase } from "./repository/index.js";

initializeDatabase();
const router = new express.Router();
router.use('/api/v1', routes);
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(router)


export default app;