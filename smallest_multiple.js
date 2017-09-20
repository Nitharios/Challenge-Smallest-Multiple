// jshint esversion:6

/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  let smallestMultiple = 1;

  // if ceiling mod i !== 0, smallestMultiple *= i, iterate
  for (let i = 1; i < ceiling; i++) {
    console.log(smallestMultiple);
    if (ceiling % i !== 0) {
      smallestMultiple *= i;
    }
    console.log(smallestMultiple);
  }

  return smallestMultiple;
};