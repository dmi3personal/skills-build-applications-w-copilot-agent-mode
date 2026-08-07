import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: 'OctoFit Tracker API is running' });
});
app.get('/api', (_req, res) => {
    res.json({ message: 'Welcome to OctoFit Tracker API' });
});
async function start() {
    await mongoose.connect(mongoUri);
    app.listen(port, () => {
        console.log(`OctoFit backend listening on port ${port}`);
    });
}
start().catch((error) => {
    console.error('Failed to start backend', error);
    process.exit(1);
});
