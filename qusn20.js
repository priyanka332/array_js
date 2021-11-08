// Count of the elements that is repeated in a list.


var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var same = [];
var i=0;
while (i<char_list.length){
    var j=0;
    while (j<char_list.length){
        if (!same.includes(char_list[i])){
            same.push(char_list[i])
        }
        j++
    }
    i++
}
n=[]
var k=0;
while (k<same.length){
    var count = 0;
    var l=0;
    while (l<char_list.length){
        if (same[k] == char_list[l]){
            count++
        }
        l++         
    }
    n.push([same[k],count])
    k++
}
console.log(n);




// 2nd method****




var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var same = [];
for(var i=0;i<char_list.length;i++){
    for(var j=0;j<char_list.length;j++){
        if (!same.includes(char_list[i])){
            same.push(char_list[i])
        }
    }
}
n=[]
for (var k=0;k<same.length;k++){
    var count = 0;
    for (var l=0;l<char_list.length;l++){
        if (same[k] == char_list[l]){
            count++
        }            
    }
    n.push([same[k],count])
}
console.log(n);




// // 3rd method****




var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var uniques=[]
for(var i of char_list){
if(!uniques.includes(i)){
uniques.push(i)
}
}
console.log(uniques);


for(var j of uniques){
var count=0
for(var k of char_list){
if (j === k){
count+=1
}
}
console.log(j,count," times");
}