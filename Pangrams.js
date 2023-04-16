function pangrams(s) {
    s = s.toLowerCase();
    const letters = new Set();
    
    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      
      if (letter !== ' ') {
        letters.add(letter);
      }
    }
    
    if (letters.size === 26) {
      return 'pangram';
    } else {
      return 'not pangram';
    }
  }
console.log(pangrams('We promptly judged antique ivory buckles for the next prize')); // Debe imprimir pangram
console.log(pangrams('We promptly judged antique ivory buckles for the prize')); // Debe imprimir not pangram
    