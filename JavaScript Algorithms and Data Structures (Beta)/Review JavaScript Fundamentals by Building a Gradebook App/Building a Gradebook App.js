// Description:
// In this mini project, you will get to review JavaScript fundamentals like functions, variables, conditionals and more by building a gradebook app.
// 
// This will give you an opportunity to solve small problems and get a better understanding of the basics.

// Solution:

// Step 1

function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }


// step2

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
