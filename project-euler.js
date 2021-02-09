function multiplesOf3and5(number) {
  let count = 0;
  let sum = 0;

  while (count < number) {
    if (count % 5 === 0 || count % 3 === 0) {
      sum = sum + count;
      //console.log(count);
    }
    count++;
  }
  return sum;
}

console.log(multiplesOf3and5(10));
// console.log(multiplesOf3and5(49));
// console.log(multiplesOf3and5(1000));
// console.log(multiplesOf3and5(8456));
// console.log(multiplesOf3and5(19564));
