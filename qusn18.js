// Write a program where it will console these 3 parameters for odd and even numbers.

// count

// sum

// average



var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd = 0;
var sum_even = 0;
var count_even = 0;
var count_odd = 0;
var i = 0;
while (i<elements.length){
    if (elements[i]%2 === 0){
        sum_even+=elements[i]
        count_even++
    }
    else{
        sum_odd+=elements[i]
        count_odd++
    }
    i++
}
console.log("count_even: ",count_even);
console.log("count_odd: ",count_odd);
console.log("sum_even: ",sum_even);
console.log("sum_odd: ",sum_odd);
console.log("avg_even: ",sum_even/count_even);
console.log("avg_odd: ",sum_odd/count_odd);



// // 2nd method****



var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd = 0;
var sum_even = 0;
var count_even = 0;
var count_odd = 0;
for (var i=0;i<elements.length;i++){
    if (elements[i]%2 === 0){
        sum_even+=elements[i]
        count_even++
    }
    else{
        sum_odd+=elements[i]
        count_odd++
    }
}
console.log("count_even: ",count_even);
console.log("count_odd: ",count_odd);
console.log("sum_even: ",sum_even);
console.log("sum_odd: ",sum_odd);
console.log("avg_even: ",sum_even/count_even);
console.log("avg_odd: ",sum_odd/count_odd);



// 3rd method****



var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd = 0;
var sum_even = 0;
var count_even = 0;
var count_odd = 0;
for (i of elements){
    if (i%2 === 0){
        sum_even+=i
        count_even++
    }
    else{
        sum_odd+=i
        count_odd++
    }
}
console.log("count_even: ",count_even);
console.log("count_odd: ",count_odd);
console.log("sum_even: ",sum_even);
console.log("sum_odd: ",sum_odd);
console.log("avg_even: ",sum_even/count_even);
console.log("avg_odd: ",sum_odd/count_odd);