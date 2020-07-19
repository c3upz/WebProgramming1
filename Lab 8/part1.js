import * as variables from './variables.js';

const {
  num1,
  num2,
  num3,
  num4,
  str1,
  str2,
  str3,
  str4
} = variables;

// What does this statement log and why?
// ________________________________________________
// The following statement logs "2.01". This is becuase we are adding num1 (1) and num2 (1.01) 
console.log(num1 + num2);

// What does this statement log and why?
// ________________________________________________
// The following statement logs the error 'TypeError: invalid... const 'num1' 
//     becuase here we are trying to redeclare a constant which is not allowed'
console.log(num1 += num2);

// What does this statement log and why?
// ________________________________________________
// The following statement logs "NaN" becuase we are trying to add num3 (1000) and num4 which has the value of undefined
//     becuase we are adding a number and something other than a number the result is 'NaN' or 'Not a number'
console.log(num3 + num4);

// What does this statement log and why?
// ________________________________________________
// The following statement logs an error 'SyntaxError: redeclaration ... num4' becuase the first statement is trying to 
//     redeclare a const variable which is not allowed. The first statement throwing an error does not allow for the second
//     statement to run
let num4 = 0;
console.log(num3 + num4);

// What does this statement log and why?
// ________________________________________________
// The following statement logs "hello world" this is because str1 has value of "hello" and str3 has value of "world"
//     since we are logging both items it returns "hello world"
console.log(str1, str3);

// What does this statement log and why?
// ________________________________________________
// The following statement logs "hello there world undefined" because the str1 and str3 have the same values as I stated above, and
//     str2 has the value "there" and str4 has not been assigned to value therefore it returns 'undefined'
console.log(str1, str2, str3, str4);