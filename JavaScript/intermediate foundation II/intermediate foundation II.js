// Sigma
function Sigma (x){
    var sum=0;
    for(var i=0;i<=x;i++){
        sum+=i;
    }
    return sum;
}

// Factorial
function Factorial (y){
    var multi=1;
    for(var i=1;i<=y;i++){
        multi*=i;
    }
    return multi;
}

// Fibonacci 
function Fibonacci (){
    var fibo=[0,1];
    for(i=1;i<100;i++){
        fibo.push(fibo[i]+fibo[i-1]);
    }
    var R=fibo[98]/fibo[99];
    console.log('Golden Ratio:'+ R);
    console.log(fibo);
}
Fibonacci ();

// Array: Second-to-Last
function StoL (array){
    var z=array[array.length-2]
    if(array.length<3){
        return null;
    }
    else {
        return z;
    }
}

// Array: Nth-to-Last
function NtoL (array,n){
    var z=array[array.length-n]
    if(array.length<3){
        return null;
    }
    else {
        return z;
    }
}

// Array: Second-Largest:
function StoLar (a){
    var max=a[0];
    var nn=[];
    for(var i=0;i<a.length;i++){
        if(a[i]>max){
            max=a[i];
            nn.push(a[i]);
        }
    }
    var sc=nn[nn.length-2];
    console.log(sc);
    return sc;
}
StoLar ([1,2,3,4,5,6,7,8,9,44,55,-1000,99]);

//Double Trouble:
function listA (arr){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
    }
    return newarr;
}

