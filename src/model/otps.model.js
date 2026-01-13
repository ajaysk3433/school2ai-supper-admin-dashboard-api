import pool from "../database/db.js";
export const insertOtp = (value) => {
    const sql = `INSERT INTO otps (user_identifier,otp,expires_at) VALUES (?,?,?)`;
    return new Promise((response, reject) => {
        pool.query(sql, value, (error, results) => {
            if (error) {
                reject(error);
            }

            response(results.insertId);
        });
    });
};

export const findOtp = (value) => {
    const sql = `SELECT otp FROM otps WHERE user_identifier = ? AND expires_at > NOW()`;
    return new Promise((response, reject) => {
        pool.query(sql, value, (error, results) => {
            if (error) {
                reject(error);
            }

            response(results[0]);
        });
    });
};
