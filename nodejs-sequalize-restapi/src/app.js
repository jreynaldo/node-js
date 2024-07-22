import express from "express";
import projectsRout from './routes/projects.routes.js';
const app = express();
app.use(express.json());
app.use('/projects',projectsRout);
export default app;