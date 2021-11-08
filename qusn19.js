// Kitne Crorepati?

// Who has the more than 1 crore or equal to 1 crore called Crorepati hain.

// Who has the more than 1 lakh or equal to 1 lakh called Lakhpati hain.

// Who has less than 1 lakh they are called as Dilwale hain.

// You have to print Count of crorepati, Count of lakhpati, Count of Dilwale



var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var Count_crorepati = 0;
var Count_lakhpati = 0;
var Count_Dilwale = 0;
var i = 0;
while (i<kitna_paisa_hai.length){
    if (kitna_paisa_hai[i]>=10000000){
        Count_crorepati+=1
    }
    else if (kitna_paisa_hai[i]>=100000){
        Count_lakhpati+=1  
    }
    else if (kitna_paisa_hai[i]<100000){
        Count_Dilwale+=1
    }
    i++
}
console.log("Crorepati ",Count_crorepati);
console.log("Lakhpati ",Count_lakhpati);
console.log("Dilwale ",Count_Dilwale);



// 2nd method****



var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var Count_crorepati = 0;
var Count_lakhpati = 0;
var Count_Dilwale = 0;
for (var i=0;i<kitna_paisa_hai.length;i++){
    if (kitna_paisa_hai[i]>=10000000){
        Count_crorepati+=1
    }
    else if (kitna_paisa_hai[i]>=100000){
        Count_lakhpati+=1  
    }
    else if (kitna_paisa_hai[i]<100000){
        Count_Dilwale+=1
    }
}
console.log("Crorepati ",Count_crorepati);
console.log("Lakhpati ",Count_lakhpati);
console.log("Dilwale ",Count_Dilwale);



// 3rd method****



var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var Count_crorepati = 0;
var Count_lakhpati = 0;
var Count_Dilwale = 0;
for (i of kitna_paisa_hai){
    if (i>=10000000){
        Count_crorepati+=1
    }
    else if (i>=100000){
        Count_lakhpati+=1  
    }
    else if (i<100000){
        Count_Dilwale+=1
    }
}
console.log("Crorepati ",Count_crorepati);
console.log("Lakhpati ",Count_lakhpati);
console.log("Dilwale ",Count_Dilwale);