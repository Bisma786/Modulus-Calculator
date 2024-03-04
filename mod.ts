import inquirer from "inquirer"
const valueOne= await inquirer.prompt({
    name:"val1",
    type:"number",
    message:"Enter the number of obejcts"
})

const ValueTwo= await inquirer.prompt({
    name:"val2",
    type:"number",
    message:"Enter the number of containers",
})
let total=valueOne.val1%ValueTwo.val2;
console.log(total)