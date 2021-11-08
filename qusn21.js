// Remove the duplicates and put them in a separate list


var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var same = [];
var i=0;
while (i<number_list.length){
    var count = 0;
    var j=0;
    while (j<number_list.length){
        if (!same.includes(number_list[i])){
            same.push(number_list[i])
        }
        j++
    }
    i++  
}
var n=[]
var k=0;
while (k<same.length){
    var count = 0;
    var l=0;
    while (l<number_list.length){
        if (same[k] == number_list[l]){
            count++
        }
        l++          
    }
    k++
if (count>1){
    n.push(same[k])
}
}
console.log(n);



// 2nd method****




// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// var same = [];
// for (var i=0;i<number_list.length;i++){
//     var count = 0;
//     for (var j=0;j<number_list.length;j++){
//         if (!same.includes(number_list[i])){
//             same.push(number_list[i])
//         }
//     }    
// }
// var n=[]
// for (var k=0;k<same.length;k++){
//     var count = 0;
//     for (var l=0;l<number_list.length;l++){
//         if (same[k] == number_list[l]){
//             count++
//         }            
//     }
// if (count>1){
//     n.push(same[k])
// }
// }
// console.log(n);




// 3rd method****




// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// var uniques=[]
// var duplicates=[]
// for(var i of number_list){
//     if(!uniques.includes(i)){
//         uniques.push(i)
//     }
// }
// for(var j of uniques){
//     var count=0
//     for(var k of number_list){
//         if (j === k){
//             count+=1
//         }
//     }
// if(count >1){
// duplicates.push(j);
// };
// }
// console.log(duplicates);