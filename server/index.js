import express from 'express';
import cors from 'cors';

import generate from './generate.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3005;


app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});


app.post('/generate', async (req, res) => {
    const query = req.body.query;

    try {
        const sqlQuery = await generate(query);
        res.json({ status: 200, response: sqlQuery });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



