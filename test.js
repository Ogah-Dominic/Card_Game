// // // Assignment 1

// function greetings(userName) {
//     const upperCaseName = userName.toUpperCase();
//     const Time = new Date();
//     Time.setHours(Time.getUTCHours() + 2);
//     const hour = Time.getHours();

//     let greeting;

//     if (hour < 12) {
//         greeting = "Good Morning";
//     } else if (hour < 18) {
//         greeting = "Good Afternoon";
//     } else {
//         greeting = "Good Evening";
//     }
//     return `${greeting} Mr. ${upperCaseName}, Welcome to The Curve Africa. The time is ${Time.toLocaleTimeString()}.`;
// }

// const userName = "KELVIN";
// console.log(greetings(userName));

// Assignment 2

// function formatName(fullName) {
//     const trimmedName = fullName.trim();
//     const formattedName = trimmedName
//         .split(" ")
//         .filter(word => word !== "")
//         .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
//         .join(" ");

//     return formattedName;
// }
// const inputName = "  osondu confidence ";
// console.log(formatName(inputName));


//Assignment 3

// function reverseWords(sentence) {
//     const words = sentence.split(" ");
//     const reversedWords = words.reverse();
//     return reversedWords.join(" ");
// }
// const input = "Why plenty too is Assignment! Sir";
// console.log(reverseWords(input));

// //Assignment 4

// function Details(firstName, lastName, mathScore, scienceScore) {
//     const upperCaseFirstName = firstName.toUpperCase();
//     const someName = lastName[0].toUpperCase();
//     const totalScore = mathScore + scienceScore;
//     const averageScore = totalScore / 2;

//     return `Welcome ${upperCaseFirstName} ${someName}. Your total score is ${totalScore} and your average score is ${averageScore}.`;
// }
// const name = Details("osondu", "confidence", 100, 96);
// console.log(name);


// //Assignment 5

// function arrDetails(array) {
//     const Items = array.length;
//     const joineItems = array.join(", ");
//     return `The 3 items of the array are: ${Items} items: ${joineItems}`;
// }
// const fruits = ["Orange", "Mango", "Lime_Orange"];
// console.log(arrDetails(fruits));


//Assignment 6

// function formatFullName(firstName, lastName) {
//     const formattedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//     const formattedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
//     return `${formattedFirstName} ${formattedLastName}`;
// }
// const fullName = formatFullName("osondu", "confidence");
// console.log(fullName);
