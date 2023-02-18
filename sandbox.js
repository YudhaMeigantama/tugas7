const fs = require("fs")

// Synchronous

//read data
const data = fs.readFileSync("./homework.txt", "utf-8")
console.log(data)

// //write data
fs.writeFileSync("./log.txt", data, "utf-8" )
console.log("Data Baru Masuk")

// Asynchronous
// fs.readFile("./homework.log", "utf-8" , (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data);
// }



