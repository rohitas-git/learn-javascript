/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

// - Module Script


/* -------------------------------------------------------------------------- */
/*                                Module Script                               */
/* -------------------------------------------------------------------------- */

// ES6 introduced a way to easily share code among JavaScript files.
// Exporting: parts of a file for use in one or more other files
// Importing: the parts you need, where you need them.

// In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:
// * Module Script : <script type="module" src="filename.js"></script>

/* --------------------------------- Export --------------------------------- */
// Export a single function
export const add = (x, y) => {
    return x + y;
}

const sub = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

// Export multiple variables or functions
export {sub, multiply};


/* --------------------------------- Import --------------------------------- */

import { print, println } from './module.js';

// Create myCode object with stuff from module.js
import * as myCode from "./module.js";

myCode.println("That's how you import");


/* ----------------------------- Export default ----------------------------- */

// Usually you will use this syntax if only one value is being exported from a file. 
// It is also used to create a fallback value for a file or module.

// Note: Since export default is used to declare a fallback value for a module or file, 
//       you can only have one value be a default export in each module or file. 
//       Additionally, you cannot use export default with var, let, or const

export default function add(x, y) {
    return x + y;
  }
  
export default function(x, y) {
    return x + y;
}

/* ----------------------------- Import default ----------------------------- */
import varName from "./module.js";

// NO { } 
// NOT import {funcName} from "./module.js"

