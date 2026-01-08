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
                school_id: result.insertId,
            });
        });
    });
};
