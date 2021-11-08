// Write a program to reverse the element of the array.


var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var rev=[]
var i=numbers.length-1;
while (i>=0){
    rev.push(numbers[i])
    i--
}
console.log(rev);