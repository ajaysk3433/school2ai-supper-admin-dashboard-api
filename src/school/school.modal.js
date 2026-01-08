import pool from "../database/db.js";

export const findAllSchool = () => {
    const sql = "SELECT * FROM school_master_profile";
    return new Promise((resolve, reject) => {
        pool.query(sql, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

export const insertSchool = ({
    school_name,
    country,
    state,
    city,
    pincode,
    timezone,
    cost,
    student_count,
    teacher_count,
    language_preference,
    board,
    status,
    website_enabled,
    allowed_domains,
}) => {
    const sql = `
        INSERT INTO school_master_profile (
            school_name,
            country,
            state,
            city,
            pincode,
            timezone,
            cost,
            student_count,
            teacher_count,
            language_preference,
            board,
            status,
            website_enabled,
            allowed_domains
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        school_name,
        country,
        state,
        city,
        pincode,
        timezone,
        cost,
        student_count,
        teacher_count,
        language_preference,
        board,
        status,
        website_enabled,
        allowed_domains,
    ];

    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, result) => {
            if (err) {
                return reject(err);
            }

            resolve({
                schoolId: result.insertId,
            });
        });
    });
};

export const updateSchoolFieldByID = (schoolId, field, value) => {
    const sql = `
    UPDATE school_master_profile
    SET
     ${field} = ?
    WHERE school_id = ?;
  `;

    return new Promise((resolve, reject) => {
        pool.query(sql, [value, schoolId], (err, result) => {
            if (err) {
                return reject(err);
            }

            resolve({
                schoolId: result.insertId,
                affectedRows: result.affectedRows,
            });
        });
    });
};

export const deleteSchoolByID = (schoolId) => {
    const sql = `
    DELETE FROM school_master_profile
    WHERE school_id = ?;
  `;

    return new Promise((resolve, reject) => {
        pool.query(sql, [schoolId], (err, result) => {
            if (err) return reject(err);

            resolve({
                schoolId,
                affectedRows: result.affectedRows,
            });
        });
    });
};
