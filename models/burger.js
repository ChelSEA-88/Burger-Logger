// const orm = require("../config/orm.js");

// const burger = {
//     selectAll: (cb) => {
//         orm.selectAll("burgers", (res) => {
//             cb(res);
//         });
//     },

//     insertOne: (cols, vals, cb) => {
//         orm.insertOne("burgers", cols, vals, (res) => {
//             cb(res);
//         });
//     },

//     updateOne: (id, obj, cb) => {
//         //update burgers id condition (what is waiting to be devoured)
//         const condition = "id = " + id;
//         orm.updateOne("burgers", obj, condition, cb);
//     },
// };

// module.exports = burger;

// Import ORM object
let orm = require("../config/orm.js");


// Create burger object
let burger = {
    selectAll:  function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(col, val, conditionCol, conditionVal, cb) {
        orm.updateOne("burgers", col, val, conditionCol, conditionVal, function(res) {
            cb(res);
        });
    },

    deleteOne: function(conditionCol, conditionVal, cb) {
        orm.deleteOne("burgers", conditionCol, conditionVal, function(res) {
            cb(res);
        });
    }
};


// Export burger object
module.exports = burger;