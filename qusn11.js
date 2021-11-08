// Palindrome


var n = ['m','a','l','a','y','a','l','a','m'];
var i = n.length-1;
var j = [];
while (i>=0){
    j.push(n[i])
    i--
}
var c = 0;
var k = 0;
while (k<n.length){
    if (j[k]===n[k]){
        c++
    }
    k++
}
if (c===n.length){
    console.log("it is palindrome");
}
else{
    console.log("it is not palindrome");
}