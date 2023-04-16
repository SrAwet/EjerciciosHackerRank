function diagonalDifference(arr) {
    let sumPrimary = 0;
    let sumSecondary = 0;
    
    for (let i = 0; i < arr.length; i++) {
      sumPrimary += arr[i][i];
      sumSecondary += arr[i][arr.length - i - 1];
    }
    
    return Math.abs(sumPrimary - sumSecondary);
  }

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(diagonalDifference(arr));
