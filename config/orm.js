const connection = require("./connection.js");


// Helper function for mySQL syntax.//
function printQuestionMarks(num) {
    const arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

const orm = {
    selectAll: (tableName, cb) => {
        var queryString = `SELECT * FROM ??`;
        //load table
        connection.query(queryString, [tableName, cb], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: (tableName, cols, vals, cb) => {
        var queryString = `INSERT INTO ${tableName} (${cols.toString()}) VALUES 
        (${printQuestionMarks(vals.length)
        });`;
        //add burger
        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: (tableName, obj, condition, cb) => {
        const queryString = `UPDATE ?? SET ? WHERE ${CONDITION}`;
        //DELETE BURGER
        connection.query(queryString, [tableName], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }


};

module.exports = orm;