const transpose = function(matrix) {
  // Put your solution here
  let result = [];
  for (let i=0;  i< matrix.length; i++) {
    for (let j=0; j < matrix[i].length; j++) {
      if (i === 0) {
        const temp = [];
        temp.push(matrix[i][j]);
        result.push(temp);
      } else {
        result[j].push(matrix[i][j]);
      } 
      
    }
  }
  return result;
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));