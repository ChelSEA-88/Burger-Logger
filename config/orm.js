// const connection = require("./connection.js");


// // Helper function for mySQL syntax.//
// function printQuestionMarks(num) {
//     const arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }
//     return arr.toString();
// }

// const orm = {
//     selectAll: (tableName, cb) => {
//         var queryString = `SELECT * FROM ??`;
//         //load table
//         connection.query(queryString, [tableName, cb], (err, res) => {
//             if (err) throw err;
//             cb(res);
//         });
//     },

//     insertOne: (tableName, cols, vals, cb) => {
//         var queryString = `INSERT INTO ${tableName} (${cols.toString()}) VALUES 
//         (${printQuestionMarks(vals.length)
//         });`;
//         //add burger
//         connection.query(queryString, vals, (err, res) => {
//             if (err) throw err;
//             cb(res);
//         });
//     },

//     updateOne: (tableName, obj, condition, cb) => {
//         const queryString = `UPDATE ?? SET ? WHERE ${condition}`;
//         connection.query(queryString, [tableName], (err, res) => {
//             if (err) throw err;
//             cb(res);
//         });
//     }


// };

// module.exports = orm;

// Import connection
let connection = require("../config/connection.js");


// Create ORM object
let orm = {
    selectAll:  function(table, cb) {
        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        
        connection.query(queryString, [table, cols, vals], (err, result) => {
            if (err) throw err;

            cb(result);
        });

    },

    updateOne: function(table, col, val, conditionCol, conditionVal, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        
        connection.query(queryString, [table, col, val, conditionCol, conditionVal], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },

    deleteOne: function(table, conditionCol, conditionVal, cb) {
        const queryString = "DELETE FROM ?? WHERE ?? = ?";
        
        connection.query(queryString, [table, conditionCol, conditionVal], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
};


//Export ORM object
module.exports = orm;