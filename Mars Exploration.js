function marsExploration(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i += 3) {
      const chunk = s.substring(i, i + 3);
      
      if (chunk[0] !== 'S') {
        count++;
      }
      
      if (chunk[1] !== 'O') {
        count++;
      }
      
      if (chunk[2] !== 'S') {
        count++;
      }
    }
    
    return count;
  }
  console.log(marsExploration('SOSSPSSQSSOR'));
  console.log(marsExploration('SOSSOT'));
  console.log(marsExploration('SOSSOSSOS'));
    