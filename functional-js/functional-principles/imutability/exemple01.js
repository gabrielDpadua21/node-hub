// congela o objeto e nao permite nenhuma alteracao ...
const nums = Object.freeze([3, 1, 7, 9, 4, 6]);

// nums fica imutavel ...
function ordenar(array) {
    return [...array].sort();
}

console.log(ordenar(nums));
console.log(nums);