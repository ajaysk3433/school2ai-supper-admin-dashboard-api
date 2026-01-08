import { findAllSchool, insertSchool } from "./school.modal.js";
export const getAllSchoolDetails = async () => {
    const schoolDetails = await findAllSchool();
    return schoolDetails;
};

export const createNewSchool = async (newSchoolDetails) => {
    // Validate all fields present
    for (const key in newSchoolDetails) {
        if (!newSchoolDetails[key]) {
            throw { status: 400, message: `Field "${key}" is required` };
        }
    }

    const schoolId = await insertSchool(newSchoolDetails);
    return schoolId;
};
