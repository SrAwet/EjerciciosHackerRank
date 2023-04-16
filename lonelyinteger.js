function lonelyinteger(arr) {
    let count = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (count[arr[i]]) {
        count[arr[i]]++;
      } else {
        count[arr[i]] = 1;
      }
    }
  
    for (let num in count) {
      if (count[num] === 1) {
        return num;
      }
    }
  }
  
  console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1])); 