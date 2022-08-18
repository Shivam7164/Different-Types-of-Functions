// -look at the example below and do the same for other problems.

/*
1. Write a function named convertToString that accepts a number and
 converts the number into a string (hint: use String()) and return the converted value.
Do the following for the given problem:
*/

// - Write a Function Decleration

function convertToString(num){
  let converted = String(num)
  return converted;
}

  // - Write a Function Expression

  let convertToString = function (num){
    let converted = String(num)
    return converted;
  }

  // - Write an Arrow Function without curly brackets (if possible)
 
  let convertToString = num => String(num);

  // - Write an Arrow Function with curly brackets

  let convertToString  = num => {
    return  String(num);
 };

  // - Execute the function

  convertToString(21)

  
  // - Execute the function and store the return value in a variable.

 let allFunction = convertToString(21)

  // - What is the typeof returnValue

//  Ans =   the typeof returnValue is string
  
  
  /* 2. Add one to the given value
  Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).
  Do the following with above problem.
  */

  // - Write a Function Declaration
   
  function addOne(num){
    return num + 1;
};
  
 
  // - Write a Function Expression

  let addOne = function (num){
    return num + 1;
};
 
  // - Write an Arrow Function without curly brackets(if possible)

  let addOne = (num) => num + 1;
  
  // - Write an Arrow Function with curly brackets

  let addOne = (num) => {
    return num + 1;
};
 
  // - Execute the function

  addOne(12);
  
  // - Execute the function and store the return value in a variable.

  let sumAddNumber = addOne(12);
  
  // - What is the typeof returnValue

  // The typeof returnValue is number


  /*3. Subtract one
  Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)
  Do the following with above problem.
  */
  
  // - Write a Function Declaration
  
    function substractOne(num){
    return num - 1;
};
 
  // - Write a Function Expression

  let substractOne = function (num){
    return num - 1;
};
 
  // - Write an Arrow Function without curly brackets(if possible)

   let substractOne = function (num) => num - 1;
  

  // - Write an Arrow Function with curly brackets

  let substractOne = (num) => {
    return num - 1;
};
 
  // - Execute the function
    
  substractOne(12);

  // - Execute the function and store the return value in a variable.
    
  let substractNumber = substractOne(12);
  
 
  // - What is the typeof returnValue

  // The typeof returnValue is number

  
  /* 4. Add two numbers
  Write a function named `sum` that accepts two numbers and returns the sum of them.
  Do the following with above problem.
  */
  
  // - Write a Function Declaration

    function sum(numA,numB){
    return numA + numB;
};
 
  // - Write a Function Expression

   let sum = function (numA,numB){
    return numA + numB;
};
  
  // - Write an Arrow Function without curly brackets(if possible)

  let sum = (numA,numB) => numA + numB; 
  
  // - Write an Arrow Function with curly brackets

  let sum = (numA,numB) => {
    return numA + numB;
  };
  
  // - Execute the function

  sum(12,13)
 
  // - Execute the function and store the return value in a variable

  let sumTwoNumber = sum(12,13);
  
  // - What is the typeof returnValue

  // typeof returnValue is 'number'


  /* 5. Square of the given value
  Write a function named `square` that accepts a number and returns the square of the number.
  Do the following with above problem.
  */
  
  // - Write a Function Declaration

  function square(number) {
      return number*number
  }
 
  // - Write a Function Expression

 let square = function (number) {
    return number*number
 }
 
  // - Write an Arrow Function without curly brackets(if possible)

     let square = (number) => number*number;

  // - Write an Arrow Function with curly brackets

   let square = (number) => {
    return number*number;
 }
 
  // - Execute the function

  square(13);
  
  // - Execute the function and store the return value in a variable

     let nuumberSquare =  square(13); 
 
  // - What is the typeof returnValue

  // typeof returnValue is 'number'


  /* 6. Find isGreater
  Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.
  Do the following with above problem.
  */
  
  // - Write a Function Declaration

     function isGreater(x,y){
      if(x>y){
        return true
      }else{
        return false
      }
     }
  
  // - Write a Function Expression
   
 let isGreater = function (x,y){
    if(x>y){
      return true
    }else{
      return false
    }
   }
  
  // - Write an Arrow Function without curly brackets(if possible)

  let isGreater = (x,y) => x>y ? 'true' : 'false';
  
  // - Write an Arrow Function with curly brackets

  let isGreater = (x,y) => {
    return x>y ? true : false;
}

  // - Execute the function

  isGreater(12,13);
  
  // - Execute the function and store the return value in a variable

  let trueAndFalse = isGreater(12,13);
  
  // - What is the typeof returnValue

  // typeof returnValue is "boolean"

  /* 7.
  Write a function named `oddOrEven` that accepts a`number` and returns
    - `Number is odd` for odd number
    - `Number is even` for even number.
  Do the following with above problem.
  */
  
  // - Write a Function Declaration

  function oddOrEven(number){
      if(number % 2 !== 0 ){
        return `Number is odd`
      }else {
       return `Number is even`
      }
  }
  
  // - Write an anonymous Function Expression

  let oddOrEven = function (number){
    if(number % 2 !== 0 ){
      return `Number is odd`
    }else {
     return `Number is even`
    }
}
 
  // - Write an named Function Expression

  let oddOrEven = function add(number){
    if(number % 2 !== 0 ){
      return `Number is odd`
    }else {
     return `Number is even`
    }
}
 
  // - Write an Arrow Function without curly brackets (hint: use ternary operator)
  
  let oddOrEven = (number) => number % 2 !==0 ? `Number is odd` : `Number is even`


  // - Write an Arrow Function with curly brackets

      let oddOrEven = (number) => {
    if(number % 2 !== 0 ){
      return `Number is odd`
    }else {
     return `Number is even`
    }
}
  
  // - Execute the function

  oddOrEven(12);
  
  // - Execute the function and store the return value in a variable

     let oddOrEvens = oddOrEven(12);
  
  // - What is the typeof returnValue

  // typeof returnValue is "string"