function main(dtoIn) {
    const generateEmployeeData = require('./DU3.js');
    const pracovnici = generateEmployeeData(dtoIn);

    let cetnost = {}; // Četnost všech jmen
    let cetnostMale = {}; // Četnost pouze mužských jmen
    let cetnostFemale={};
    let cetnostMaleWorkload40={};

    // Spočítání četnosti jmen
    pracovnici.forEach(element => {
        // Četnost všech jmen
        if (cetnost[element.name] === undefined) {
            cetnost[element.name] = 1;
        } else {
            cetnost[element.name]++;
        }

        // Četnost mužských jmen
        if (element.gender === 'male') { // Ověření pohlaví
            if (cetnostMale[element.name] === undefined) {
                cetnostMale[element.name] = 1;
            } else {
                cetnostMale[element.name]++;
            }
            if(element.workload===40)
            {
                if (cetnostMaleWorkload40[element.name] === undefined) {
                    cetnostMaleWorkload40[element.name] = 1;
                } else {
                    cetnostMaleWorkload40[element.name]++;
                }

            }
        }
        if (element.gender === 'female') { // Ověření pohlaví
            if (cetnostFemale[element.name] === undefined) {
                cetnostFemale[element.name] = 1;
            } else {
                cetnostFemale[element.name]++;
            }
        }
    });

   

    // Získání maximální četnosti
    const maxCount = Math.max(...Object.values(cetnost));
    const maxCountMale = Math.max(...Object.values(cetnostMale));
    const maxCountFemale = Math.max(...Object.values(cetnostFemale));
    const maxCountMaleWorkload40=Math.max(...Object.values(cetnostMaleWorkload40));

    // Vyhledání všech jmen s maximální četností a jejich četnosti
    let maxNames = Object.entries(cetnost)
        .filter(([name, count]) => count === maxCount)
        .map(([name, count]) => ({ name, count }));

    let maxNamesMale = Object.entries(cetnostMale)
        .filter(([name, count]) => count === maxCountMale)
        .map(([name, count]) => ({ name, count }));

    let maxNamesFemale = Object.entries(cetnostFemale)
        .filter(([name, count]) => count === maxCountFemale)
        .map(([name, count]) => ({ name, count }));

    let maxNamesMaleWorkload40 = Object.entries(cetnostMaleWorkload40)
        .filter(([name, count]) => count === maxCountMaleWorkload40)
        .map(([name, count]) => ({ name, count }));
    // Návrat hodnot
    return {
        allNamesFrequency: cetnost,
        maleNamesFrequency: cetnostMale,
        femaleNamesFrequency: cetnostFemale,
        maleNamesFrequencyWorkload40:cetnostMaleWorkload40,
        mostFrequentNames: maxNames,
        mostFrequentMaleNames: maxNamesMale,        
        mostFrequentFemaleNames: maxNamesFemale,
        mostFrequentMaleNamesWorkload40:maxNamesMaleWorkload40,

    };
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
