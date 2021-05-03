var testArr = [6,3,5,1,2,4];
var s=0;
for(var i=0;i<testArr.length;i++){
    s+=testArr[i];
    console.log('Num:',testArr[i],'Sum:',s);
}
// "Num:", 6, "Sum:", 6
// "Num:", 3, "Sum:", 9
// "Num:", 5, "Sum:", 14
// "Num:", 1, "Sum:", 15
// "Num:", 2, "Sum:", 17
// "Num:", 4, "Sum:", 21

var testArr = [6,3,5,1,2,4];
for(var x=0;x<testArr.length;x++){
    testArr[x]*=x;
}
console.log(testArr);

// [0, 3, 10, 3, 8, 20]