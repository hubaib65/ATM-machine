#!/usr/bin/env node
import inquirer from "inquirer";
let my_balance = 10000;
let pin = 1234;
let userpin = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin: "
    }
]);
console.log(userpin.pin);
if (userpin.pin == pin)
    console.log("correct");
let useroptions = await inquirer.prompt([
    {
        name: "options",
        type: "list",
        message: "select your option: ",
        choices: ["withdraw", "deposit", "balance", "fastcash", "exit"]
    }
]);
if (useroptions.options == "withdraw") {
    let withdraw = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount: "
        }
    ]);
    my_balance = my_balance - withdraw.amount;
    if (withdraw.amount > 10000) {
        console.log("insufficient balance");
    }
    else {
        console.log("your balance is: " + my_balance);
    }
}
else if (useroptions.options == "deposit") {
    let deposit = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount: "
        }
    ]);
    my_balance += deposit.amount;
    console.log(`your balance is: ${my_balance}`);
}
else if (useroptions.options == "balance") {
    console.log(`your balance is: ${my_balance}`);
}
else if (useroptions.options == "fastcash") {
    let fastcash = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "select the amount: ",
            choices: [500, 1000, 2000, 5000, 10000, 12000, 15000, 20000]
        }
    ]);
    my_balance -= fastcash.options;
    if (fastcash.options > 10000) {
        console.log("insufficient balance");
    }
    else {
        console.log(`your balance is: ${my_balance}`);
    }
}
else if (useroptions.options == "exit") {
    console.log("thank you for using atm machine");
}
else {
    console.log("incorrect");
}
