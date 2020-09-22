const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },

    updateOne: (id, obj, cb) => {
        //update burgers id condition (what is waiting to be devoured)
        const condition = "id = " + id;
        orm.updateOne("burgers", obj, condition, cb);
    },
};

module.exports = burger;