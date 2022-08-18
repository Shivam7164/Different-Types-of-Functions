// function Declaration
function addNumber(a,b){
  return a+b;
}
addNumber(2,4);


// function expression
const addNumber = function add(a,b){
    return a+b;
  }
  


// Anonymous function expression
const addNumber = function (a,b){
    return a*b;
  }
  addNumber(12,14);


//   arrow function
const addNumber = (a,b) =>{
    return a-b;
  }
  addNumber(10,5);
       // or

const addNumber = (a,b) => a+b;
addNumber(1+10);