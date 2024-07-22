import { Router } from "express";
import { getProjects, postProject ,getProject, deleteProject, putProject} from "../controllers/projects.controller.js";
const router = Router();
router.get('/',getProjects);
router.post('/',postProject);

router.route('/:id')
.put(putProject)
.delete(deleteProject)
.get(getProject);

export default router;