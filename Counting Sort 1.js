function countingSort(arr) {
    let counters = Array(100).fill(0); 
    
    for (let i = 0; i < arr.length; i++) {
      counters[arr[i]]++;
    }
    
    return counters;
  }

  let arr = [1, 1, 3, 2, 1];
  console.log(countingSort(arr));
    