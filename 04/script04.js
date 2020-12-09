// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
let age = 41;
if (age >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log(`You are left with ${18 - age}  years do drive`)
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = 33;
if (age > yourAge) {
    console.log('me i\'m older')
} else {
    console.log('ypu are older');
}
// Enter your age: 30
// You are 5 years older than me.
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 9;
let b = 6;
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else if (a === b) {
    console.log(`they are equal`)
}
else {
    console.log(`${b} is greather than ${a}`);
}
(a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greather than ${a}`);
// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
let number = 2;
if (number % 2 === 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is an odd number`)
}


// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let grades = 53;
switch (true) {
    case grades > 80 && grades < 100:
        console.log('A');
        break;
    case grades > 70 && grades < 89:
        console.log('B');
        break;
    case grades > 60 && grades < 69:
        console.log('C');
        break;
    case grades > 50 && grades < 59:
        console.log('D');
        break;
    case grades > 0 && grades < 49:
        console.log('F');
        break;
                                        
    default:
        console.log(grades)
        break;
}
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let season = 'April';
switch (season) {
    case ('September' || 'October' || 'November'):
        console.log('Autumn');
        break;
    case ('December' || 'January' || 'February'):
        console.log('Winter');
        break;
    case ('March' || 'April' || 'May'):
        console.log('Spring');
        break;
    case ('June' || 'July' || 'August'):
        console.log('Summer');
        break;
    default:
        console.log('nici unda dintre ele')
        break;
}
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
let day = 'SaturDay'
if (day.toLowerCase()==='saturday' || day.toLowerCase() === 'saturday') {
    console.log('is wekend!!')
} else {
    console.log('go to work')
}

// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.\
let month = 'February';
let date = new Date();
const getDaysInMonth = date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Write a program which tells the number of days in a month, now consider leap year.
console.log(getDaysInMonth(new Date(2019, 2, 0)));