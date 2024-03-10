//Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
let personName: string= "Asharib";
console.log(`Hello ${personName} would you like to learn some TypeScript today?”`)

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//lower case
let personsName: string ="Muneeba";
console.log("lowercase:" , personsName.toLowerCase());

//upper case
console.log("uppercase:" , personsName.toLocaleUpperCase());

//Titlecase
console.log("titlecase:" , personsName.replace(/\be/g,c => c.toUpperCase()));