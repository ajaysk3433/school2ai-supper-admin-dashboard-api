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

export const populateSchoolFeatures = (value) => {
    const sql = `INSERT INTO school_features (school_id, feature_id)
SELECT ?, id FROM features;
`;

    return new Promise((resolve, reject) => {
        pool.query(sql, value, (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result);
        });
    });
};
