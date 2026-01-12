import { getAllRoles, createRole } from "./roles.service.js";

export const getRolesController = async (req, res) => {
    try {
        const roles = await getAllRoles();
        res.status(200).json(roles);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        res.status(status).send(message);
    }
};

export const createRolesController = async (req, res) => {
    try {
        const roles = await createRole(req.body);
        res.status(200).json(roles);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        res.status(status).send(message);
    }
};
