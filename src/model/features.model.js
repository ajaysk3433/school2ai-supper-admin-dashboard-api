import pool from "../database/db.js";
export const insertFeature = (value) => {
    const sql = `INSERT INTO features (feature_name ,description) VALUES (?.?)`;
    return new Promise((resolve, reject) => {
        pool.query(sql, value, (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result);
        });
    });
};
