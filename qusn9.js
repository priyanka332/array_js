// Write a program to check the second max of the array, and console it.


var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=0;
var second_max=0;
var i =0;
while (i<numbers.length){
  if (max<numbers[i]){
    if (second_max<max){
      second_max=max;
    }
    max=numbers[i];
  }
  else{
    if (second_max<numbers[i]){
      second_max=numbers[i];
    }
  }
  i++
}
console.log(second_max)