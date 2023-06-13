import fs from "fs";

console.log("Ventas totales: 26");

const data = fs.readFileSync("src/grocery-store/supermercado1.ros", "utf8");

console.log(data);
