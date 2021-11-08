// Write a program to count how many odd numbers are there and how many even numbers are there in a given list.


var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var odd = 0;
var even = 0;
var i = 0;
while (i<elements.length){
    if (elements[i]%2 === 0){
        even++
    }
    else{
        odd++
    }
    i++
}
console.log("even: ",even);
console.log("odd: ",odd);



// 2nd method****



var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var odd = 0;
var even = 0;
for (var i=0;i<elements.length;i++){
    if (elements[i]%2 === 0){
        even++
    }
    else{
        odd++
    }
}
console.log("even: ",even);
console.log("odd: ",odd);



// 3rd method****



var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var odd = 0;
var even = 0;
for (i of elements){
    if (i%2 === 0){
        even++
    }
    else{
        odd++
    }
}
console.log("even: ",even);
console.log("odd: ",odd);