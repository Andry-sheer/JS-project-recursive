
// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функцію pow(num, degree).


function pow (num, degree) {

  if (degree === 0) { return 1 }

  return num * pow (num, degree - 1);

}

console.log(pow(5, 2)); // 5**2  = 25


// //? ========== ALTERNATIVE ======================

// function pow (num, degree) {

//   if (degree === 0) { return 1 }

//   return num * pow (num, degree - 1);

// }

// const sumPow = pow(5, 2); // 5**2  = 25
// console.log(`${sumPow} = RESULT`);