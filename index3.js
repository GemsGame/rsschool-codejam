const array = [];
const array2 = [];
const array3 = [];

function recursion (tree) {
 if(typeof(tree) === 'object') {
           array.push([tree.value]); //100

    for(var value in tree) {
        if(typeof(tree[value]) === 'object') {
            array2.push(tree[value].value) //90
            
            for(var value2 in tree[value]) {
                if(typeof(tree[value][value2]) === 'object') {
               array3.push([tree[value][value2].value])
                    
                    
                    
                }
            }
        }
    }

    
 }
    
}

const arrayMain = [];
arrayMain.push(array,array2,array3);



let tree = {
    
    "value":100,
    
    "left":{"value":90,"left":{"value":70},"right":{"value":99}},
    
    "right":{"value":120,"left":{"value":110},"right":{"value":130}}};


//let array = recursion(tree);

recursion(tree);
console.log(arrayMain); // [[100], [90, 120], [70,99,110,130]]


//Реализовать функцию recursion, которая получает на вход дерево представленное объектом следующей структуры: