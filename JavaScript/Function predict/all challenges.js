// Get 1 to 255
function count(){
    var arr=[];
    for(var i=0;i<=255;i++){
        arr.push(i)
    }
    return arr;
}

// Get even 1000
function sumeven (){
    var sum=0;
    for(var i=2;i<=1000;i+=2){
        sum+=i;
    }
    return sum;
}

// Sum odd 5000
var sum=0;
function sumodd (){
    for(var i=1;i<5000;i+=2){
        sum+=i;
    }
    return sum;
}

// Iterate an array

function arrsum (array){
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=arr[i];
    }
    return sum;
}

// Find max
function findmax (array){
    var max=array[0];
    for(var i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}

// Find average
function arrsum (array){
    var sum=0;
    var avg;
    for(var i=0;i<array.length;i++){
        sum+=arr[i];
    }
    avg=sum/array.length
    return avg;
}

// Array odd
function odd50(){
    var arr=[];
    for(var i=1;i<50;i+=2){
        arr.push(i)
    }
    return arr;
}

// Greater than Y
function graterthan (y,array){
    var count=0;
    for(var i=0;i<array.length;i++){
        if(array[i]>y){
            count++;
        }
    }
    return count;
}

// Squares
function Squ (array){
    for(var i=0;i<array.length;i++){
        array[0]*=array[0];
    }
    return array;
}

// Negatives
function Negative (array){
    for(var i=0;i<array.length;i++){
        if(array[i<0]){
            array[i]=0;
        }
    }
    return array;
}

// Max/Min/Avg
function mma (array){
    var arr=[];
    var max=array[0];
    var min=array[0];
    var sum=0;
    var avg;
    for(var i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
        if(array[i]<min){
            min=array[i];
        }
        sum+=array[i];
    }
    avg=sum/array.length
    arr=[max,min,avg];
    return arr;
}

// Swap Values
function Swap (array){
    var temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;
    return array;
}

// Number to String
function NtoS (array){
    for(var i=0;i<array.length;i++){
        if(array[i]<0){
            array[i]='Dojo';
        }
    }
    return array;
}