import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { isEmail } from "./isEmail.js";

const rl = readline.createInterface({ input, output });

const email = await rl.question("Please, enter an email: ");
rl.close();

const isValid = isEmail(email);

if (isValid) {
  console.log("The email is valid");
} else {
  console.log("The email is invalid");
}
