function main(dtoIn) {
    const generateEmployeeData = require('./DU3.js');
    const pracovnici = generateEmployeeData(dtoIn);

    let cetnost = {};
    
    // Spočítání četnosti jmen
    pracovnici.forEach(element => {
        if (cetnost[element.name] === undefined) {
            cetnost[element.name] = 1;
        } else {
            cetnost[element.name]++;
        }
    });

    console.log(cetnost);

    // Získání maximální četnosti
    const maxCount = Math.max(...Object.values(cetnost));

    // Vyhledání všech jmen s maximální četností a jejich četnosti
    let maxNames = Object.entries(cetnost)
        .filter(([name, count]) => count === maxCount)
        .map(([name, count]) => ({ name, count }));

    return maxNames; 
}

const dtoIn = {
    age: {
        min: 20,
        max: 40
    },
    count: 50 // Počet zaměstnanců, které chceme vygenerovat
};

let dtoOut = main(dtoIn);
console.log(dtoOut);
