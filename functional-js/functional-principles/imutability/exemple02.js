const nums = [4, 8, 3, 2, 9, 1, 9, 3];

// Exemplo com Recursividade

function somarArray(array, total = 0) {
    if(array.length === 0) return total;

    return somarArray(array.slice(1), total + array[0]);
}

// Exemplo com imutabilidade - declarativo ...
const total = nums.reduce((acc, value) => acc += value);


// sem imutabilidade
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
// }

console.log(total);
console.log(somarArray(nums));