function validateText(min) {
    return function(max) {
        return function(error) {
            return function(text) {
                // Lazy evaluation ...
                // Sera executada somente quando o ultimo parametro for passado ...
                const tam = (text || '').trim().length;
            
                if (tam < min || tam > max) {
                    throw error;
                }
            }
        }
    }
}

function validate(fn) {
    return function(value) {
        try {
            fn(value);
        } catch (error) {
            return {error: error}
        }
    }
}

const forcePattern = validateText(4)(255);
const forceNameValid = forcePattern("Nome do produto invalido!!!");
const validateName   = validate(forceNameValid);

const produto1 = {nome: 'A', preco: 14.99, desc: 0.25}
const produto2 = {nome: 'B', preco: 23.99, desc: 0.24}

console.log(validateName(produto1.nome));
console.log(validateName(produto2.nome))
