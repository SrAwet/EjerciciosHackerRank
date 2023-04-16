function gradingStudents(grades) {
    let roundedGrades = [];
  
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] > 37 && grades[i] % 5 > 2) {
        let roundedGrade = Math.ceil(grades[i] / 5) * 5;
        roundedGrades.push(roundedGrade);
      } else {
        roundedGrades.push(grades[i]);
      }
    }
  
    return roundedGrades;
  }
  
  console.log(gradingStudents([73, 67, 38, 33]));
  