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

const forcePattern = validateText(4)(255);

const forceNameValid = forcePattern("Nome do produto invalido!!!");

const produto = {nome: 'A', preco: 14.99, desc: 0.25}

forceNameValid(produto.nome);