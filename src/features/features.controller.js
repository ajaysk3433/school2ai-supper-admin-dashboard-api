import { createFeature } from "./features.service.js";
export const createFeatureController = async (req, res) => {
    try {
        const status = createFeature(req.body);
        res.status(200).json(status);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "something went wrong";
        res.status(status).send(message);
    }
};
