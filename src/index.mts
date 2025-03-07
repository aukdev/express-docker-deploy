import express from 'express';
import cors from 'cors';
import rootRouter from "./routes/index.mjs";

const app = express();

app.use(express.json());
app.use(cors({}));

const PORT = 4000;

app.use('/api/v1/', rootRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})