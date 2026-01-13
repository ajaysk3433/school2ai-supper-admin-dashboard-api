import { insertFeature } from "../model/features.model.js";
export const createFeature = async (newFeature) => {
    const value = [newFeature.feature_name, newFeature.description];
    try {
        const status = await insertFeature(value);
    } catch (error) {
        // console.log(error);
        throw { status: 500, message: "Database error" };
    }
};
