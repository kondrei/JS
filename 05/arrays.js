// Exercise
// Exercise: Level 1


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
// Declare an empty array;
const emptyArr = [];
// Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6, 7]
// Find the length of your array
console.log(numbers.length);
// Get the first item, the middle item and the last item of the array
console.log('first item', numbers[0]);
console.log('middle item', numbers[Math.round(numbers.length / 2) - 1]);
console.log('last item', numbers[numbers.length - 1]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'doi', 'trei', [4, 5, 6], 'altceva', 9];
console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log('first item', itCompanies[0]);
console.log('middle item', itCompanies[Math.round(itCompanies.length / 2) - 1]);
console.log('last item', itCompanies[itCompanies.length - 1]);
// Print out each company
console.log(itCompanies.slice())
// Change each company name to uppercase one by one and print them out
itCompanies.forEach(element => {
  console.log(element.toUpperCase())
});
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = '';
for (let x in itCompanies) {
  console.log(x)
  if (x == itCompanies.length - 1) {
    sentence += sentence.substring(sentence.length - 2, length);
    sentence += ' and ' + itCompanies[x];
  } else {
    sentence += itCompanies[x] + ', ';

  }
}
console.log(sentence)
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'Dacia'
if (sentence.indexOf(company) != -1) {
  console.log(`${company} este in array`)
} else {
  console.log(`${company} NU este in array`)
}
// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.round(itCompanies.length / 2), 6))
// Remove the first IT company from the array
console.log(itCompanies.pop())
// Remove the middle IT company or companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
// Remove the last IT company from the array
console.log(itCompanies.push())
// Remove all IT companies

// Exercise: Level 2
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries);
// First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[^A-Za-z0-9\s]/gi, "")
let words = text.split(' ');
console.log(words)
console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13
// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.indexOf('Meat'))
  shoppingCart.unshift('Meat')

// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.indexOf('Sugar'))
  shoppingCart.push('Sugar');
// remove 'Honey' if you are allergic to honey
x = shoppingCart.slice(4, 1)

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.indexOf('Ethiopia'))
  console.log(countries[countries.indexOf('Ethiopia')])

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (itCompanies.indexOf('Sass')) {
  console.log('Sass is a CSS preprocess');
  console.log(itCompanies);
} else {
  itCompanies.push('Sass');
  console.log(itCompanies);
}
// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// Exercise: Level 3
// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());
console.log(Math.max(...ages))
// Sort the array and find the min and max age
console.log("sort array",ages.sort());

// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.