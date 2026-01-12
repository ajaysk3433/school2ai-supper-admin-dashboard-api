import pool from "../database/db.js";

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

export const findUserByEmail = (email) => {
    const findUserSql = "SELECT * FROM users WHERE email = ?";
    return new Promise((resolve, reject) => {
        pool.query(findUserSql, [email], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results[0]);
        });
    });
};

export const insertUser = (values) => {
    const insertUserSql = ` INSERT INTO users 
        (name, role_id, school_id, email, password, description)
        VALUES (?, ?, ?, ?, ?, ?)`;

    return new Promise((resolve, reject) => {
        pool.query(insertUserSql, values, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};
