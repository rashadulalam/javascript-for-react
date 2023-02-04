// (1) var, let, const

// var example 
// var firstName = "Biswajit";
// console.log(firstName)
// firstName = "Indrojit"
// console.log(firstName)

// // let example
// let lastName = "Adhikary";
// console.log(lastName);
// lastName = "Saha";
// console.log(lastName);

// cosnt example
// const firstName = "Biswajit";
// console.log(firstName);
// firstName = "Alam";
// console.log(firstName);


// (2) Arro function
// Example 1
function showText( txt) {
    console.log(txt)
}
// showText("Hello world!");

// Example 2
const showTxt = (txt) => {
    console.log(txt)
}

// Example 3
const firstName = () => {
    console.log("Rashadul");
}
firstName();

// Example 4
const t = new Date();
const age = birthYear => t.getFullYear() - birthYear;
// console.log(age(1991));