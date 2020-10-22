const orm = require("../config/orm.js");

const burger = {
    all(cb) {
        orm.all("burger", (results) => {
            cb(results);
        });
    },

    create(cols, vals, cb) {
        orm.create("burger", cols, vals, (result) => {
            cb(result);
        });
    },
    update(objColVals, condition, cb) {
        orm.update("burger", objColVals, condition, (result) => {
            cb(result);
        });
    },
    delete(condition, cb) {
        orm.delete("burger", condition, (result) => {
            cb(result);
        });
    }
};


module.exports = burger;