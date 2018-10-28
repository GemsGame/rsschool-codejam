function sumOfOther (arr) {
var arra = [];
    for(i=0; i<arr.length; i++) {
        
    var s = arr.reduce((a,b) => a+b) - arr[i];
    
     console.log(s);
    }


}


sumOfOther([2, 3, 4, 1]);