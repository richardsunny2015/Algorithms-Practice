/* Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

var generate = function(numRows) {
  const retTri = new Array(numRows); // create an array with the length of numRows
  for (let row = 0; row < retTri.length; row++) {
    retTri[row] = []; // set each element in that newly created array with an empty array
  }
  for (let i = 0; i < retTri.length; i++) {
    if (i === 0) { // set up the first two rows
      retTri[i].push(1);
    } else if (i === 1) {
      retTri[i].push(1, 1);
    } else { // every row after the second
      retTri[i].push(1); // push 1
      const rowBefore = retTri[i - 1]; // set rowBefore
      for (let j = 0; j < rowBefore.length - 1; j++) { // loop one less than the length of the previous row
        retTri[i].push(rowBefore[j] + rowBefore[j + 1]); // push the number at j + the number at j + 1 from the previous row
      }
      retTri[i].push(1); // push the last 1 of that row
    }
  }
  return retTri;
};
