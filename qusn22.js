// You need to remove the all occurrences of subStr in mainStr and give the output

// subStr = "over"


mainstr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
newstr=mainstr.split(' ')
i=0
a=' '
while (i < newstr.length){
	if (newstr[i]=="over"){
		a=a+''
    }
	else{
		a=a+newstr[i]+' '
    }
	i=i+1
}
console.log(a)