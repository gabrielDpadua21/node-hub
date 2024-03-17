// wrapper
// container
// Objecto que implementam a funcao map
// Array em javascript e um exemple to functors

const nums = [1, 2, 3, 4, 5, 6];

const newNums = nums.map(num => num + 10)
                    .map(num => num * 2)


console.log(newNums);

