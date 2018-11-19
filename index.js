let arra = [];
function sumOfOther (arr) {

    for(i=0; i<arr.length; i++) {
        
    var s = arr.reduce((a,b) => a+b) - arr[i];
    
    arra.push(s);
    }

return arra;
}


sumOfOther([2, 3, 4, 1]);
