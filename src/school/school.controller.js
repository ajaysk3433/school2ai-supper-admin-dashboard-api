import { getAllSchoolDetails, createNewSchool } from "./school.service.js";
export const getAllSchoolDetailsController = async (req, res) => {
    try {
        const schoolDetails = await getAllSchoolDetails();
        res.status(200).json(schoolDetails);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        res.status(status).send(message);
    }
};

export const createNewSchoolController = async (req, res) => {
    try {
        const newSchoolDetails = req.body;
        const schoolId = await createNewSchool(newSchoolDetails);
        res.status(200).json(schoolId);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        res.status(status).send(message);
    }
};
