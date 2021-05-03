// Biggie Size
function big (array){
    for(var i=0;i<array.length;i++){
        if(array[i]>0){
            array[i]='Big';
        }
    }
    return array;
}

// Print Low, Return High
function mma (array){
    var max=array[0];
    var min=array[0];
    for(var i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
        if(array[i]<min){
            min=array[i];
        }
        
    }
    console.log(min);
    return max;
}

// Print One, Return Another
function Podd (array){
    var firood;
    for(var i=1;i<array.length;i++){
        console.log(array[i]);
        
    }
    for(var i=0;i<array.length;i++){
        if(array[i]%2 == 1){
            firood=array[i];
            break;
        }
    }
    return firood;
}

// Double Vision

function double (array){
    for(var i=0;i<array.length;i++){
        array[0]*=2;
    }
    return array;
}

// Count Positives
function Cpositive (array){
    var count=0;
    for(var i=0;i<array.length;i++){
        if(array[i]>0){
            count++;
        }
    }
    array[array.length-1]=count;
    return array;
}

// Evens and Odds
function EandO (a){
    for(var i=0;i<a.length;i++){
        if(a[i]%2 == 1 && a[i+1]%2 == 1 && a[i+2]%2 == 1){
            console.log("That's odd!");
        }
        if(a[i]%2 == 0 && a[i+1]%2 == 0 && a[i+2]%2 == 0){
            console.log("Even more so!");
        }
    }
}

// Increment the Seconds
function add1 (arr){
    for(var i=1;i<a.length;i+=2){
        arr[i]+=1;
    }
    for(var i=0;i<a.length;i++){
        console.log(arr[i]);
    }
    return arr;
}

// Previous Lengths
function preLen (array){
    var newarr=[];
    newarr[0]=array[0];
    for(var i=0;i<array.length;i++){
        newarr.push(array[i].length);
    }
    console.log(newarr);
    array=newarr;
    return array;
}

// Add Seven
function add7 (array){
    var narr=[];
    for(var i=0;i<array.length;i++){
        narr.push(array[i]+7);
    }
    return narr;
}

// Reverse Array
function Revers (ar){
    var x;
    for(var i=0;i<array.length/2;i++){
        x=ar[i];
        ar[i]=ar[ar.length-1-i];
        ar[ar.length-1-i]=x;
    }
    return ar;
}

// Outlook: Negative
function allnegative (ar){
    var array=[];
    for(var i=0;i<ar.length;i++){
        if(ar[i]>0){
            array.push(ar[i]*-1);
        }
        else {
            array.push(ar[i]);
        }
    }
    return array;
}

// Always Hungry
function Hungry(a){
    var count=0;
    for(var i=0;i<a.length;i++){
        if(a[i] == "food"){
            count++;
        }
        
    }
    if(count == 0){
        console.log("I'm hungry");
    }
    for(var i=0;i<count;i++){
        console.log("yummy");
    }
}

// Swap Toward the Center
function swapodd (ar){
    var x;
    for(var i=0;i<array.length/2;i+=2){
        x=ar[i];
        ar[i]=ar[ar.length-1-i];
        ar[ar.length-1-i]=x;
    }
    return ar;
}

// Scale the Array
function multiarr (arr,b){
    for(var i=0;i<arr.length;i++){
        arr[i]*=b;
    }
    return arr;
}