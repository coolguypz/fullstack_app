
const mysql = require("mysql2")
const config = require("../config/db.json")
const conn = mysql.createConnection(config)

conn.connect((err)=>{
    if(err){
        console.log("connection is FAIL " + err);
    }else{
        console.log("connection is SUCCESS");
    }
})

const pool = mysql.createPool(config)

module.exports = pool;