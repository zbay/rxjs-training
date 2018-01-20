console.clear();

var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

// TODO: Create a var `result` that contains the sum
// of all numbers in source. Use a traditional for loop
// for this exercise.
let result = 0;
for(let i = 0; i < source.length; i++){
    let val = 1*source[i];
    if(!isNaN(val)){
        result += val;
    }
}

console.log(result); // should print the number `33` only
