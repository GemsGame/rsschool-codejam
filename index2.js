//make(15)(34, 21, 666)(41)(sum); // return 777

function sum(a, b) {
    return a + b;
}


function make (x) {
    
      return function (s,s1,s2) {
            return function (z) {
                       
                           
                    return function (sum) {
                       
                        //return x+s+s1+s2+z;
                          return [x, s, s1, s2, z].reduce(sum, 0);
                    
                    };
                
            }
        }


}