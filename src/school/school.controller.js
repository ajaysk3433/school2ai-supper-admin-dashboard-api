import {
    getAllSchoolDetails,
    createNewSchool,
    updateSchoolField,
    deleteSchool,
} from "./school.service.js";
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
        const credential = await createNewSchool(newSchoolDetails);
        res.status(200).json(credential);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        res.status(status).send(message);
    }
};

export const updateSchoolFieldController = async (req, res) => {
    try {
        const { field, value } = req.body;
        const schoolId = req.params?.id;
        const status = await updateSchoolField(schoolId, field, value);
        res.status(200).json(status);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        res.status(status).send(message);
    }
};

export const deleteSchoolController = async (req, res) => {
    try {
        const schoolId = req.params?.id;
        const status = await deleteSchool(schoolId);
        res.status(200).json(status);
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        res.status(status).send(message);
    }
};
