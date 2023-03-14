/* -------------------------------------------------------------------------- */
/*                                   Object                                   */
/* -------------------------------------------------------------------------- */
// Objects are useful for storing data in a structured way,
// you access the data in objects through what are called properties.
// Properties can : Number, String, or omit quotes for single-word string properties
// However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.


// object ObjName = { 
//   property1 : "12",
//   property2 : 1
// }

// * Objects can be thought of as a key/value storage, like a dictionary. 
// * Objects are a flexible data structure that allows 
// * for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
// 
// PROPERTY:
// Objects hold data in a property, which has a key-value format.
// 
// LOOKUP:
// If you have tabular data, you can use an object to lookup values 
// This is most useful when you know that your input data is limited to a certain range.
// 
// TESTING OBJ PROPERTIES:


import{print, newline} from "./module.js"

/* --------------------------------- sample --------------------------------- */
const sampleFord = {
    make: "Ford",
    5: "five",
    'model': "focus",
    "made by":"God"
  };

sampleFord["made by"]= "Undead"; // update object property

print(sampleFord);

/* ----------------------------- Access Object Property ---------------------------- */
print(sampleFord.make); // Dot Notation

// When must Bracket Notation: if the property of the object you are trying to access has a space in its name 
// Note that property names with spaces in them must be in quotes (single or double).

print(sampleFord["make"]);  // Bracket Notation

// Another use of bracket notation on objects is to access a property which is stored as the value of a variable.
// This can be very useful for iterating through an object's properties or when accessing a lookup table.
// Note that we do not use quotes around the variable name when using it to 
// access the property because we are using the value of the variable, not the name.

let prop1 = 'make';
let myFordMake=sampleFord[prop1];
print(myFordMake);

/* --------------------------- Add | Delete Properties --------------------------- */
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// ADD new property 'bark' to ourDog object
ourDog.bark = "bow-wow";
ourDog["bark"] = "bow-wow";

// DELETE
delete ourDog.bark;
delete ourDog["bark"];

/* ------------------------- Using Object for lookup ------------------------ */

function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  const lookup = {
    'alpha': 'Adams',
    'bravo':'Boston',
    'charlie':'Chicago',
    'delta':'Denver',
    'echo':'Easy',
    'foxtrot':'Frank'
  }
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

/* --------------------- Testing Objects for Properties --------------------- */

// Check if the property of a given object exists or not. 
// Use the .hasOwnProperty(propname) method of objects for given property name

function checkObj(obj, checkProp) {
  let found= obj.hasOwnProperty(checkProp);

  if (found){return obj[checkProp];}
  else {return "Not Found";}
}

/* ----------------------------- Complex Object ----------------------------- */

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Talor Swift",
    "title": "Love Story",
    "release_year": 2000,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

// Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

/* ----------------------------- Nested Objects ----------------------------- */

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk["drawer"];

// * Objects can contain both nested objects and nested arrays. 

//Another
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1];
ourPets[1].names[0];

/* ----------------------------- Object vs Array ---------------------------- */

newline();

const xObj={
    1: "Oh",
    0: "lol"
}

const xArr = ["Oh", "lol"]
let x1 = xArr[1]
print(x1);

let x2 = xObj[1]
print(x2);

/* ---------------------------- Record Collection --------------------------- */

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  },
  
  // Methods for this object
  // Similar to struct impl in Rust for RecordCollection struct
  emptyTracks: function(id){
      let record = this.getRecord(id);
      return record["tracks"] === undefined;
  },
  newTracks: function(id,update){
      let record = this.getRecord(id);
      record["tracks"]=[update];
  },
  getRecord: function (id){
      return this[id];
  },
  updateOther: function(id,prop,value){
      let record = this.getRecord(id);
      record[prop]=value;
  },
  updateTracks: function (update){
      let record = this.getRecord(id);
      record["tracks"].push(update);
  },
  updateAlbumTitle: function(update){
      record.albumTitle=update;
  },
  deleteProp: function(id,prop){
      let record = this.getRecord(id);
      delete record.prop;
  }
};

// Solution1: Creating Methods for each action on Record
function updateRecords(records, id, prop, value) {
  
  switch (prop){
    case 'tracks':
    if (records.emptyTracks(id)){records.newTracks(id,value);}
    else {records.updateTracks(id,value);}
    break;

    case 'albumTitle':
    records.updateAlbumTitle(id,value);
    break;

    case "":
    records.deleteProp(id,prop)
    break;
    
    default:
    records.updateOther(id,prop,value);
  }

  return records;
}

// Solution 2:
//  Not so clean code
function updateRecords2(records, id, prop, value) {
  // Access target album in record collection
  const album = records[id];

  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks") {
    album[prop] = value;
  } else {
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');