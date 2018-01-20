console.clear();

var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

// TODO: Create a var `result` that contains the sum
// of all numbers in source. Use pure array functions
// such as map, filter, reduce, reduceRight.
let result = source.map((val) => {
    return 1 * val;
})
.filter((val) => {
    return !isNaN(val);
})
.reduce((sum, val) => {
    return sum + val;
}, 0);

console.log(result);