import { findRoles, insertRole } from "../model/roles.model.js";
export const getAllRoles = async () => {
    const roles = findRoles();
    return roles;
};

export const createRole = async (newRole) => {
    // for (let key in newRole) {
    //     if (!newRole[key]) {
    //         throw { message: `Field is required ${key}`, status: 400 };
    //     }
    // }
    const value = [newRole.role, newRole.school_id || null];
    const role = insertRole(value);
};
