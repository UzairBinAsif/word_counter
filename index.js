#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Words Counter made by Uzair Bin Asif on 19/Apr/2024\n");
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter the sentence whose words you'd like to count: "
    },
    {
        name: "confirmation",
        type: "confirm",
        message: "Would you like to count all the whitespaces too? ",
        default: false,
    }
]);
if (answer.confirmation == false) {
    const word = answer.Sentence.trim().split(" ");
    console.log(`\nThe current sentence contains "${word.length}" words excluding spaces.`);
}
else {
    const word = answer.Sentence;
    console.log(`\nThe current sentence contains "${word.length}" words including spaces.`);
}
console.log("\nYou can view it's source code at\nhttps://github.com/UzairBinAsif");
