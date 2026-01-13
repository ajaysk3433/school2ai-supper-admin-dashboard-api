import {
    findAllSchool,
    insertSchool,
    updateSchoolFieldByID,
    deleteSchoolByID,
} from "../model/school.modal.js";
import { insertRole } from "../model/roles.model.js";
import { populateSchoolFeatures } from "../model/features.model.js";
import { insertUser } from "../model/user.model.js";
import bcrypt from "bcrypt";

export const getAllSchoolDetails = async () => {
    const schoolDetails = await findAllSchool();
    return schoolDetails;
};
const saltRounds = 10;
export const createNewSchool = async (newSchoolDetails) => {
    // Validate all fields present
    for (const key in newSchoolDetails) {
        if (!newSchoolDetails[key]) {
            throw { status: 400, message: `Field "${key}" is required` };
        }
    }

    const { schoolId } = await insertSchool(newSchoolDetails);
    const { roleId } = await insertRole(["SCHOOL_ADMIN", schoolId]);

    await populateSchoolFeatures([schoolId]);
    const password = "ADMIN12345";
    const hash = await bcrypt.hash(password, saltRounds);
    const result = await insertUser([
        "ADMIN",
        roleId,
        schoolId,
        newSchoolDetails.email,
        newSchoolDetails.mobileNo,
        hash,
        "School admin ",
    ]);

    console.log(result);

    return { email: newSchoolDetails.email, password };
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
