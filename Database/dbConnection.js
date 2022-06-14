// var sql = require("mssql");


// var Config = {
//     user: "sa",
//     password:"abc123!@#",
//     server: "10.10.30.20",
//     database: "Sujith",
//     options: {
//         encrypt: false, // for azure
//         trustServerCertificate: true // change to true for local dev / self-signed certs
//        }   
//     }

exports.dbConnection = function () {
    var dbConfig = {
        user: "sa",
        password:"abc123!@#",
        server: "10.10.30.20",
        database: "Sujith",
        options: {
            encrypt: false, // for azure
            trustServerCertificate: true // change to true for local dev / self-signed certs
           }            
    };
    return dbConfig;
};
