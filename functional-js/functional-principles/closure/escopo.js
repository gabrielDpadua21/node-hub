const value = 3;


// Escopo lexico da funcao sumPlus3 e dentro da funcao fora ...
function fora() {
    const value = 197;
    
    function sumPlus3() {
        return value + 3;
    }

    return sumPlus3
}


module.exports = fora();