//Exercise: Level 1
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let string = '30 Days Of JavaScript';
//Print the string on the browser console using console.log()
console.log(string);
//Print the length of the string on the browser console using console.log()
console.log(string.length)
//Change all the string characters to capital letters using toUpperCase() method
console.log(string.toLocaleUpperCase())
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(string.toLowerCase())
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(string.substr(3,4))
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(string.substr(3,string.length))
//Check if the string contains a word Script using includes() method
console.log(string.includes('Script'))
//Split the string into an array using split() method
console.log(string.split())
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(string.split(' '))
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(string.replace('JavaScript','Pyton'))
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(string.charAt(15));
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(string.charCodeAt('J'))
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(string.indexOf('a'));
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(string.lastIndexOf('a'))
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(' 30 Days Of JavaScript '.trim())
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(string.startsWith(30))
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(string.endsWith('Script'))
//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(string.match(/a+/gi))
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log(string.concat('30 Days of','JavaScript'))
//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(string.repeat(2))



//Exercise: Level 2
//Using console.log() print out the following statement:
//
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
//Using console.log() print out the following quote by Mother Teresa:
//

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
//
console.log(typeof(10) == 'number');
//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
//
console.log(Math.round(parseFloat('9.8')) == 10)

//Check if 'on' is found in both python and jargon
//
console.log('python'.match(/on+/gi))
//I hope this course is not full of jargon. Check if jargon is in the sentence.
//
console.log('I hope this course is not full of jargon'.match(/jargon+/gi))
//Generate a random number between 0 and 100 inclusively.
//
let number = Math.floor(Math.random() * 100);
console.log('betwen 0 and 100 ', number);
//Generate a random number between 50 and 100 inclusively.
//
let min = 50;
let max = 100
number = Math.floor(Math.random() * (max-min)+min)
console.log('betwen 50 and 100 ', number);
//Generate a random number between 0 and 255 inclusively.
//

max = 255;
number = Math.floor(Math.random() * max)
console.log('betwen 0 and 255 ', number);
//Access the 'JavaScript' string characters using a random number.
//
string = 'JavaScript';
max = string.length;
console.log(string[Math.floor(Math.random() * max)])
//Use console.log() and escape characters to print the following pattern.
//
console.log('\t1\t1\t1\t1\t1');
//2 1 2 4 8
//3 1 3 9 27
//4 1 4 16 64
//5 1 5 25 125
//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
//
console.log('You cannot end a sentence with because because because is a conjunction'.slice(30,45))
//Exercises: Level 3
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
//
let word = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love+/gi);
console.log(word.length)
//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//
word = 'You cannot end a sentence with because because because is a conjunction'.match(/because+/gi);
console.log(word.length);
//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx = sentence.match(/[a-z+]/gi);
console.log(...regEx);
//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
string = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(/\d+/gi);

let total = 0;
  for (let x of string) {
      total += parseInt(x);
  }

  console.log(total);