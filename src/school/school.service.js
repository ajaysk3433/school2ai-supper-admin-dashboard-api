import {
    findAllSchool,
    insertSchool,
    updateSchoolFieldByID,
    deleteSchoolByID,
} from "../model/school.modal.js";
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

export const updateSchoolField = async (schoolId, field, value) => {
    if (!schoolId) {
        throw { status: 400, message: "School Id  required" };
    }
    if (!field) {
        throw { status: 400, message: "Field  required" };
    }

    if (!value) {
        throw { status: 400, message: "Value  required" };
    }

    const allowedFields = [
        "school_name",
        "country",
        "state",
        "city",
        "pincode",
        "timezone",
        "cost",
        "student_count",
        "teacher_count",
        "language_preference",
        "board",
        "status",
        "website_enabled",
        "allowed_domains",
    ];

    if (!allowedFields.includes(field)) {
        throw { status: 400, message: "Invalid field name" };
    }
    const result = await updateSchoolFieldByID(schoolId, field, value);
    return result;
};

export const deleteSchool = async (schoolId) => {
    if (!schoolId) {
        throw { status: 400, message: "School Id  required" };
    }
    const result = await deleteSchoolByID(schoolId);
};
