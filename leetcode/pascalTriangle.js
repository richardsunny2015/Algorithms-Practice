var generate = function(numRows) {
  const retTri = new Array(numRows);
  for (let row = 0; row < retTri.length; row++) {
    retTri[row] = [];
  }
  for (let i = 0; i < retTri.length; i++) {
    if (i === 0) {
      retTri[i].push(1);
    } else if (i === 1) {
      retTri[i].push(1, 1);
    } else {
      retTri[i].push(1);
      const rowBefore = retTri[i - 1];
      for (let j = 0; j < rowBefore.length - 1; j++) {
        retTri[i].push(rowBefore[j] + rowBefore[j + 1]);
      }
      retTri[i].push(1);
    }
  }
  return retTri;
};
