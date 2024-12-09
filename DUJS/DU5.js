function main(dtoIn) {
    const generateEmployeeData = require('./DU3.js');
    // Kontrola validnosti vstupních dat
    if (dtoIn.count <= 0) {
        // Pokud počet zaměstnanců není kladný
        return "Chyba-počet zaměstnancu neni spravný";
    }
    if (dtoIn.age.min >= dtoIn.age.max) {
        // Pokud minimální věk je větší nebo roven maximálnímu
        return "Chyba-minimální věk je větší nebo roven maximálnímu";
    }

    // Generování seznamu zaměstnanců na základě dtoIn
    const listOfEmployees = generateEmployeeData(dtoIn);

    // Výpočet statistik zaměstnanců
    const mostUsedNames = getEmployeeChartContent(listOfEmployees);

    
}
function getEmployeeChartContent(listOfEmployees)
{
    let all = {}; // Četnost všech jmen
    let male = {}; // Četnost pouze mužských jmen
    let female={};
    let maleFullTime={};
    let femalePartTime={};

    // Spočítání četnosti jmen
    pracovnici.forEach(element => {
        // Četnost všech jmen
        if (all[element.name] === undefined) {
            all[element.name] = 1;
        } else {
            all[element.name]++;
        }

        // Četnost mužských jmen
        if (element.gender === 'male') { // Ověření pohlaví
            if (male[element.name] === undefined) {
                male[element.name] = 1;
            } else {
                male[element.name]++;
            }
            if(element.workload===40)
            {
                if (maleFullTime[element.name] === undefined) {
                    maleFullTime[element.name] = 1;
                } else {
                    maleFullTime[element.name]++;
                }

            }
        }
        if (element.gender === 'female') { // Ověření pohlaví
            if (female[element.name] === undefined) {
                female[element.name] = 1;
            } else {
                female[element.name]++;
            }
            if(element.workload!==40)
            {
                if (femalePartTime[element.name] === undefined) {
                    femalePartTime[element.name] = 1;
                } else {
                    femalePartTime[element.name]++;
                }

            }
        }
    });

   

    // Získání maximální četnosti
    const maxCount = Math.max(...Object.values(all));
    const maxCountMale = Math.max(...Object.values(male));
    const maxCountFemale = Math.max(...Object.values(female));
    const maxCountmaleFullTime=Math.max(...Object.values(maleFullTime));
    

    // Vyhledání všech jmen s maximální četností a jejich četnosti
    let maxNames = Object.entries(all)
        .filter(([name, count]) => count === maxCount)
        .map(([name, count]) => ({ name, count }));

    let maxNamesMale = Object.entries(male)
        .filter(([name, count]) => count === maxCountMale)
        .map(([name, count]) => ({ name, count }));

    let maxNamesFemale = Object.entries(female)
        .filter(([name, count]) => count === maxCountFemale)
        .map(([name, count]) => ({ name, count }));

    let maxNamesmaleFullTime = Object.entries(maleFullTime)
        .filter(([name, count]) => count === maxCountmaleFullTime)
        .map(([name, count]) => ({ name, count }));
    // Návrat hodnot
    return {
        allNamesFrequency: all,
        maleNamesFrequency: male,
        femaleNamesFrequency: female,
        maleNamesFrequencyWorkload40:maleFullTime,
        mostFrequentNames: maxNames,
        mostFrequentMaleNames: maxNamesMale,        
        mostFrequentFemaleNames: maxNamesFemale,
        mostFrequentMaleNamesWorkload40:maxNamesmaleFullTime,

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
