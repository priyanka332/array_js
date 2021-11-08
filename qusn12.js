// Given two arrays, find which numbers are not present in the second array.


var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
var list = []
for (var i=0;i<list1.length;i++){
    if (!list2.includes(list1[i])){
        list.push(list1[i])
    }
}
console.log(list);



// 2nd method****



var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
var list = []
var i=0;
while (i<list1.length){
    if (!list2.includes(list1[i])){
        list.push(list1[i])
    }
    i++
}
console.log(list);