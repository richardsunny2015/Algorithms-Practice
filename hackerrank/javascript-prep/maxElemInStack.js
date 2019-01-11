// Given a string where each line is a query with the following rules:
// 1 x : push x into stack
// 2 : delete last element in stack
// 3 : print current maximum element in stack

function processData(input) {
  //Enter your code here
  const parsed = input.split('\n').slice(1); // split the string by newline and remove the first line since it's only the length of the queries
  const stack = []; // basic stack
  const maximumStack = []; // a stack of all maximum elements
  for (let i = 0; i < parsed.length; i++) {
    const query = parsed[i][0]; // the query is the first character of the string
    if (query === '1') {
      const num = Number(parsed[i].slice(2)); // there's a space between the query and the num so slice at idx 2
      stack.push(num); // push num
      if (!maximumStack.length || num >= maximumStack[maximumStack.length - 1]) {maximumStack.push(num);}
      // ^ check to see if there's no length in maximumStack OR the last element is smaller or equal to current num
    } else if (query === '2') {
      const poppedElem = stack.pop();
      if (poppedElem === maximumStack[maximumStack.length - 1]) {maximumStack.pop();}
      // ^ check to see if the popped element is also the maximum element
    } else {
      console.log(maximumStack[maximumStack.length - 1]);
    }
  }
}
