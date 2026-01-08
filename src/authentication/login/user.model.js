import pool from "../../database/db.js";

export const findUserByMobile = (mobile) => {
    const findUserSql = "SELECT * FROM users WHERE mobile = ?";
    return new Promise((resolve, reject) => {
        pool.query(findUserSql, [mobile], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results[0]);
        });
    });
};
