  let arr = [1, 3, 5, 4, 2, 1, 9, 5, 3, 6];

  //Finds the sum of all the numbers in the array
  const sumall = arr.reduce((a, b) => a + b, 0);
  //Divides the sum of all the elements(numbers) in arr by the total number of elements in arr
  const meanofarr = sumall / arr.length;
  console.log(meanofarr);
