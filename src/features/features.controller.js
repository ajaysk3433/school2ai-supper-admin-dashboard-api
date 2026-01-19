import {
    createFeature,
    getFeature,
    toggleFeature,
} from "./features.service.js";
export const createFeatureController = async (req, res) => {
    try {
        const status = await createFeature(req.body);
        res.status(200).json(status);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "something went wrong";
        res.status(status).send(message);
    }
};

export const getFeatureController = async (req, res) => {
    try {
        const features = await getFeature(req.params);
        res.status(200).json(features);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "something went wrong";
        res.status(status).send(message);
    }
};

export const toggleFeatureController = async (req, res) => {
    try {
        const features = await toggleFeature(req.body);
        res.status(200).json(features);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "something went wrong";
        res.status(status).send(message);
    }
};
