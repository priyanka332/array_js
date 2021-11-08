// Write the program, to find the max element of the array,and console it.


var numbers=[50, 40, 23, 70, 96, 12, 5, 10, 7];
var max_num=0;
var i=0; 
while (i<numbers.length){
  if (numbers[i]>max_num){
    max_num=numbers[i]
  }
  i++
}
console.log(max_num)