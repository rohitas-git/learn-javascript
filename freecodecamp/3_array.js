/* -------------------------------------------------------------------------- */
/*                                    Array                                   */
/* -------------------------------------------------------------------------- */

var myArray = ["It",9];
var teams = [["Bulls", 23], ["White Sox", 45]];

/* --------------------------------- Access --------------------------------- */
var array = [50, 60, 70];
console.log(array[0]);
var data = array[1];

/* ------------------------------- Mutability ------------------------------- */
var ourArray = [50, 40, 30];
ourArray[0] = 15;

/* ------------------------- Multi-dimensional Array ------------------------ */
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
var subarray = arr[3];
var nestedSubarray = arr[3][0];
var element = arr[3][0][1];

/* ---------------------------------- Push ---------------------------------- */
var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);

/* ----------------------------------- Pop ---------------------------------- */
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

/* --------------------------------- Shifted -------------------------------- */
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);

/* --------------------------------- Unshift -------------------------------- */
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift(["Paul", 35]);

