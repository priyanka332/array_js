// How to find all pairs in an array of integers whose sum is equal to the given number?


var n = [10, 11, 12, 13, 14, 17, 18, 19]
var number = 30
list = []
for (var i=0;i<n.length;i++){
    for (var j=0;j<n.length;j++){
        if (n[i] + n[j] === number){
            list.push([n[i],n[j]])
        }
    }
}
console.log(list);



// 2nd method****



var n = [10, 11, 12, 13, 14, 17, 18, 19]
var number = 30
list = []
var i=0;
while (i<n.length){
    var j=0;
    while (j<n.length){
        if (n[i] + n[j] === number){
            list.push([n[i],n[j]])
        }
        j++
    }
    i++
}
console.log(list);



// 3rd method****



var n = [10, 11, 12, 13, 14, 17, 18, 19]
var number = 30
list = []
for (i of n){
    for (j of n){
        if (i+j === number){
            list.push([i,j])
        }
    }
}
console.log(list);