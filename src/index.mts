import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import rootRouter from "./router/index.mjs";

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors({}));

app.use("/api/v1/", rootRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));