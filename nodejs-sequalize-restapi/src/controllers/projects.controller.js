import { Where } from "sequelize/lib/utils";
import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
    try {

        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}
export const getProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findByPk(id);
        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const postProject = async (req, res) => {
    const { name, priority, description } = req.body;
    try {
        const project = await Project.create({
            name,
            priority,
            description,
        });
        res.send(project);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const putProject = async (req, res) => {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    try {
        const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        project.save()
        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
         await Project.destroy({
            where: {
                id
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}