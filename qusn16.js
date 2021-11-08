// Write a program to console the sum of odd numbers and sum of even numbers from a given list.

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum_odd = 0;
var sum_even = 0;
var i = 0;
while (i<elements.length){
    if (elements[i]%2 === 0){
        sum_even+=elements[i]
    }
    else{
        sum_odd+=elements[i]
    }
    i++
}
console.log("sum_even: ",sum_even);
console.log("sum_odd: ",sum_odd);



// 2nd method****



var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd = 0;
var sum_even = 0;
for (var i=0;i<elements.length;i++){
    if (elements[i]%2 === 0){
        sum_even+=elements[i]
    }
    else{
        sum_odd+=elements[i]
    }
}
console.log("sum_even: ",sum_even);
console.log("sum_odd: ",sum_odd);



// 3rd method****



var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd = 0;
var sum_even = 0;
for (i of elements){
    if (i%2 === 0){
        sum_even+=i
    }
    else{
        sum_odd+=i
    }
}
console.log("sum_even: ",sum_even);
console.log("sum_odd: ",sum_odd);