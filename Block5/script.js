/*1.
function add(let a = 0, let b = 0){
  return a + b;
}
add(21, 23);
*/

// What is the output of the above code write error if invalid? 
error
// Is the code above valid or not?

invalid
// Explain the reason

// ans == because we can not used statement in place of parameter;



/*
2.
function add(a = 0; b = 0) {
  return a + b;
}
add(21, 23);
*/

// What is the output of the above code write error if invalid?
error
// Is the code above valid or not?
invalid
// Explain the reason
// ans == because we do not used semicolon inside the parameter.

/*
3.
function add(a = 0, b) {
  return a + b;
}
add(21);
*/

// What is the output of the above code write error if invalid?
invalid
// Is the code above valid or not?

invalid

// Explain the reason
//ans ==  when we do called the Function .so we give the argument. if argument give undefined that is return undefined so we give value inside the  parameter.

/*
4.
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21);
*/
// What is the output of the above code write error if invalid?
21
// Is the code above valid or not?
valid
// Explain the reason
// ans == beacause we can be give any value and exprssion.


/*
5.
function knowWhy(value) {
 return if(value === 21){
      console.log("Yes");
    } else {
     console.log("No");
    }
}
knowWhy(211);
*/

// What is the output of the above code write error if invalid?
error
// Is the code above valid or not?
invalid
// Explain the reason
// ans == beacause function used the ruturn keyword and right hend side ruturn can only be a expression. you can not return statement.


/*
6.
function knowWhy(value) {
 return if(value === 21){
      console.log("Yes");
    } else {
     console.log("No");
    }
}
knowWhy(21);
*/

// What is the output of the above code write error if invalid?
error
// Is the code above valid or not?
invalid
// Explain the reason

// ans == beacause function used the ruturn keyword and right hend side ruturn can only be a expression. you can not return statement.

/*
7.
function isItIf(ifElse) {
  return ifElse;
}
isItIf(if(true){console.log('Testing')});
*/
// What is the output of the above code write error if invalid?
// Is the code above valid or not?
// Explain the reason


/*
8.
function add(a = 0, b = 0) {
  return a + b;
}
add(null, 21);
*/
// What is the output of the above code write error if invalid?
21
// Is the code above valid or not?
valid
// Explain the reason
// ans === rule says we can passed only kind of value and expression 