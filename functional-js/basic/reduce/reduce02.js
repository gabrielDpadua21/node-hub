const listProduts = [
    {"nome": "Ps4", "preco": 2500, "categoria": "games"},
    {"nome": "Xbox series x", "preco": 5000, "categoria": "games"},
    {"nome": "Ps5", "preco": 4500, "categoria": "games"},
    {"nome": "Xbox one", "preco": 2500, "categoria": "games"},
    {"nome": "iphone 8", "preco": 3000, "categoria": "smartphone"},
    {"nome": "iphone X", "preco": 3500, "categoria": "smartphone"},
    {"nome": "Iphone 11", "preco": 4500, "categoria": "smartphone"},
    {"nome": "Iphone 12", "preco": 8000, "categoria": "smartphone"}
]

const getCategoryGames = (item) => item.categoria === "games";

const getCategoryPhone = (item) => item.categoria === "smartphone";

const getPrice = (item) => item.preco;

const sumTotal = (total, value) => total + value;

const totalGames = listProduts
            .filter(getCategoryGames)
            .map(getPrice)
            .reduce(sumTotal)

const totalSmartphone = listProduts
                .filter(getCategoryPhone)
                .map(getPrice)
                .reduce(sumTotal)

console.log("Total games: " + totalGames);

console.log("Total Smartphone: " + totalSmartphone);