function countingValleys(steps, path) {
    let altitude = 0;
    let valleyCount = 0;
    
    for (let i = 0; i < steps; i++) {
      if (path[i] === 'U') {
        altitude++;
      } else {
        altitude--;
      }
      
      if (altitude === 0 && path[i] === 'U') {
        valleyCount++;
      }
    }
    
    return valleyCount;
  }
console.log(countingValleys(8, 'UDDDUDUU')); 
console.log(countingValleys(12, 'DDUUDDUDUUUD')); 
