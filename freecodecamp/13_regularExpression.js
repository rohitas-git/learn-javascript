import {println, print} from "./module.js";

// Awesome Link:
// https://regexr.com/5b2o7

/* -------------------------------------------------------------------------- */
/*                            Using the Test Method                           */
/* -------------------------------------------------------------------------- */

// - Match a Single Literal Strings 
// - Match a Literal String with Different Possibilities
// - Ignore Case While Matching
// - Extract Matches
// - Find More Than the First Match
// - Match Anything with Wildcard Period
// - Match Single Character with Multiple Possibilities
// - Match Numbers and Letters of the Alphabet
// - Match Single Characters Not Specified
// - Match Characters that Occur One or More Times
// - Match Characters that Occur Zero or More Times
// - Find Characters with Lazy Matching
// - Match Starting String Patterns
// - Match Ending String Patterns
// - Shortcuts \w \W \d \D
// - Restricting possible usernames
// - Matching Whitespace
// - Matching Non-whitespace
// 
// - Specify Upper and Lower Number of Matches
// -
// - 
// - 
// - Positive and Negative Lookahead 



// Regular expressions are used in programming languages to match parts of strings. 
// You create patterns to help you do that matching.

var testStr = "freeCodeCamp";
var testRegex = /Code/;  // Regular Expression

console.log(testRegex.test(testStr) + "\n-----------------");

/* -------------------------- Match Literal Strings ------------------------- */

var testStr = "Hello, my name is Kevin.";
var testRegex = /Kevin/;
var wrongRegex = /kevin/;

println(testRegex.test(testStr)); // true
println(wrongRegex.test(testStr)); //false

/* ----------- Match a Literal String with Different Possibilities ---------- */

var myName ="Rohitas"
var nameRegex=/rohitas | Rohitas| ROHITAS/;
println(nameRegex.test(myName));


/* ----------------------- Ignore Case While Matching ----------------------- */
// Lettercase Differences: aA bB ...
// You can match both cases using what is called a flag. 
// There are other flags but here you'll focus on the flag that ignores case - the i flag. 
// You can use it by appending it to the regex.

var myName ="RohitasBansal"
var nameRegex=/rohitasBanSal/i;
println(nameRegex.test(myName));

/* ----------------------------- Extract Matches ---------------------------- */
// You can also extract the actual matches you found with the .match() method.

var extractStr = "Extract the word 'coding' from this string.";
var anyRegex = /roh/; 
var result = extractStr.match(anyRegex);
println(result);

// Match vs Test
'string'.match(/regex/);
/regex/.test('string');

/* --------------------- Find More Than the First Match --------------------- */
// To search or extract a pattern more than once, you can use the global search flag: g.

var extractStr = "Extract the word 'coding' from this string.";
var anyRegex = /t/g; 
var result = extractStr.match(anyRegex); //['t','t','t','t','t']
println(result);

/* ------------------- Match Anything with Wildcard Period ------------------ */
// Sometimes you won't (or don't need to) know the exact characters in your patterns.
// . - wildcard character, dot; will match any one character 

let humStr = "I'll hum a song";
let hugStr = "Bear hug in a hut";
let huRegex = /hu./gi;
huRegex.test(humStr);
huRegex.test(hugStr);

println(hugStr.match(huRegex));

/* ----------- Match Single Character with Multiple Possibilities ----------- */

// You can search for a literal pattern with some flexibility with character classes.
// Character classes balances /literal/ and /./ which are extreme of regex

let bigStr = "big is not small";
let bagStr = "bag is lost";
let bugStr = "bug has come";
let bogStr = "bog is weird";
let bgRegex = /b[aiu]g/;
print(bigStr.match(bgRegex));
print(bagStr.match(bgRegex));
print(bugStr.match(bgRegex));
println(bogStr.match(bgRegex));

let vowelRegex = /[aeiou]/ig;
println(extractStr.match(vowelRegex));

/* ---------------------- Match Letters of the Alphabet --------------------- */
// when you need to match a large range of characters
// Using the hyphen (-) to match a range of characters 

let alphaRegex = /[a-z]/ig;
println(extractStr.match(alphaRegex));

/* ---------------- Match Numbers and Letters of the Alphabet --------------- */
// Using the hyphen (-) to match a range of characters 

let jennyStr = "Jenny8675309";
var myRegex = /[a-z0-9]/ig;
println(jennyStr.match(myRegex));

/* ------------------ Match Single Characters Not Specified ----------------- */
// So far, you have created a set of characters that you want to match, 
// * but you could also create a set of characters that you do not want to match. 
// These types of character sets are called negated character sets.

var negatedVowelRegex = /[^aeiou]/gi;
println(jennyStr.match(negatedVowelRegex));

/* -------------- Match Characters that Occur One or More Times ------------- */

// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. 
// This means it occurs at least once, and may be repeated.

var difficultSpelling = "aab a aaac";
var myRegex = /a+/g; 
var result = difficultSpelling.match(myRegex);
println(result);

/* ------------- Match Characters that Occur Zero or More Times ------------- */

// (+) sign to look for characters that occur one or more times. 
// (*) sign that matches characters that occur zero or more times.

var difficultSpelling = "aaaaa  ab";
var myRegex2= /aa*/g;
var result = difficultSpelling.match(myRegex2);
println(result);

/* ------------------- Find Characters with Lazy Matching ------------------- */

// greedy match: 
// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
// It finds the largest sub-string possible to fit the pattern.

// lazy match:
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

var toMatch="<h1>Winter is coming</h1>";
var greedyRegex=/<h.*>/;
var lazyRegex= /<h.*?>/;

println(toMatch.match(greedyRegex));
println(toMatch.match(lazyRegex));

// Note: Parsing HTML with regular expressions should be avoided, 
// but pattern matching an HTML string with regular expressions is completely fine.

/* --------------------- Match Beginning String Patterns -------------------- */

// In an earlier challenge, you used the caret character (^) inside a character set 
// to create a negated character set in the form [^thingsThatWillNotBeMatched]. 

// The caret is also used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

/* ---------------------- Match Ending String Patterns ---------------------- */
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); //true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); //false

/* ---------------------- Match All Letters and Numbers --------------------- */
// Shortcut \w : [A-Za-z0-9_]

var longHand = /[A-Za-z0-9_]+/;
var shortHand = /\w+/;
var numbers = "42";
var varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

var quoteSample = "The five boxing wizards jump quickly.";
const alphabetRegexV2 = /\w/g;
var result = quoteSample.match(alphabetRegexV2).length;

println(quoteSample.match(alphabetRegexV2));

/* ---------------- Match Everything But Letters and Numbers ---------------- */

// Shortcut \W for [^A-Za-z0-9_].
var shortHand = /\W/;
var numbers = "42%";
var sentence = "Coding!";
print(numbers.match(shortHand));
print(sentence.match(shortHand)); 

var quoteSample = "The five boxing wizards jump quickly.";
const nonAlphabetRegex = /\W/; 
var result = quoteSample.match(nonAlphabetRegex).length;
println(quoteSample.match(nonAlphabetRegex));

/* ---------------------------- Match All Numbers --------------------------- */

// \d -> [0-9]

var movieName = "2001: A Space Odyssey";
const numRegex = /\d/g; 
var result = movieName.match(numRegex).length;
// println(movieName.match(numRegex));

/* -------------------------- Match All Non-Numbers ------------------------- */

// \D -> [^0-9]

var movieName = "2001: A Space Odyssey";
const noNumRegex = /\D/g; 
var result = movieName.match(noNumRegex).length;
// println(movieName.match(noNumRegex));

/* ----------------------- Restrict Possible Usernames ---------------------- */

// You need to check all the usernames in a database. 
// Here are some simple rules that users have to follow when creating their username.
// 
// - Usernames can only use alpha-numeric characters.
// - The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// - Username letters can be lowercase and uppercase.
// - Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

var username = "JackOfAllTrades";

const userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
const userCheck2 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;

var result = userCheck.test(username);
println(result);

// Explaination:
// 
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input
// 
// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input

/* ---------------------------- Match Whitespace ---------------------------- */

// \s : [ \r\t\f\n\v]
// not only matches whitespace, but also carriage return, tab, form feed, and new line characters

var whiteSpace = "Whitespace. Whitespace everywhere!"
const spaceRegex = /\s/g;
whiteSpace.match(spaceRegex).length; // numbers of chars in a string

/* --------------------- Match Non-Whitespace Characters -------------------- */
// \S : [^ \r\t\f\n\v]

var whiteSpace = "Whitespace. Whitespace everywhere!"
const nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // numbers of chars in a string

/* ---------------- Specify Upper and Lower Number of Matches --------------- */

let A4 = "aaaah";
let A2 = "aah";
var multipleA = /a{3,5}h/;
print(multipleA.test(A4));
print(multipleA.test(A2));

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
var result = ohRegex.test(ohStr);
println(result);

/* ---------------- Specify Only the Lower Number of Matches ---------------- */

let A100 = "h" + "a".repeat(100) + "h";
var multipleA = /ha{3,}h/;
println(multipleA.test(A100)); 

/* --------------------- Specify Exact Number of Matches -------------------- */

let A3 = "haaah";
var multipleHA = /ha{3}h/;
print(multipleHA.test(A100)); 
println(multipleHA.test(A3)); 

/* -------------------------- Check for All or None ------------------------- */

// You can specify the possible existence of an element with a question mark, ?
// This checks for zero or one of the preceding element. 
// You can think of this symbol as saying the previous element is optional.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); //true
rainbowRegex.test(british); //true

/* --------------------- Positive and Negative Lookahead -------------------- */

// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. 
// This can be useful when you want to search for multiple patterns over the same string.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. 
// A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// A negative lookahead will look to make sure the element in the search pattern is not there.
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // ["q"]
noquit.match(qRegex); // ["q"]

// A more practical use of lookaheads is to check two or more patterns in one string.
// Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
var password = "abc123";
var checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
var sampleWord = "astronaut";
var pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
var result = pwRegex.test(sampleWord);

/* ----------------- Check For Mixed Grouping of Characters ----------------- */

// check for groups of characters using a Regular Expression 
// and to achieve that we use parentheses ().

var myString = "Eleanor Roosevelt";

var myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
var myRegex2= /(Eleanor|Franklin) (.* )?Roosevelt/;
var myRegex3=/(Franklin|Eleanor)(\s\w\.)?\sRoosevelt/;

var result = myRegex.test(myString); 

/* ------------------- Reuse Patterns Using Capture Groups ------------------ */

// Capture groups can be used to find repeated substrings.

var repeatStr = "row row row your boat";
var repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
println(repeatStr.match(repeatRegex)); // Returns ["row row row", "row"]

var repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1(?!.)/; // solution2: /^(\d+) \1 \1$/;
var result = println(reRegex.test(repeatNum));

/* ---------------- Use Capture Groups to Search and Replace ---------------- */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

println("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
println(str.replace(fixRegex, replaceText));

// can make a sentence juggler using random number in $_

/* ------------------ Remove Whitespace from Start and End ------------------ */
var hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
var result = hello.replace(wsRegex, ""); 

// /^(\s*)(.+)(\s*)$/;           wrong due to it's greedy
// /^(\s*)(.+[^\s*$])(\s*)$/  && hello.replace(wsRegex, "$2");  works
// /^(\s*)(.+?)(\s*)$/
// /(^\s*)(.*\S)(\s*$)/

