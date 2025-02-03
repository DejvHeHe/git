function main(dtoIn) {
    const generateEmployeeData = require('./DU3.js');
    // Kontrola validnosti vstupních dat
    if (dtoIn.count <= 0) {
        return "Chyba-počet zaměstnancu neni spravný";
    }
    if (dtoIn.age.min >= dtoIn.age.max) {
        return "Chyba-minimální věk je větší nebo roven maximálnímu";
    }

    // Generování seznamu zaměstnanců na základě dtoIn
    const listOfEmployees = generateEmployeeData(dtoIn);

    // Výpočet statistik zaměstnanců
    const dtoOut = getEmployeeChartContent(listOfEmployees);
    return dtoOut;
}

function getEmployeeChartContent(listOfEmployees) {
    let allFrequency = {};
    let maleFrequency = {};
    let femaleFrequency = {};
    let maleFullTimeFrequency = {};
    let femalePartTimeFrequency = {};

    listOfEmployees.forEach(element => {
        if (allFrequency[element.name] === undefined) {
            allFrequency[element.name] = 1;
        } else {
            allFrequency[element.name]++;
        }

        if (element.gender === 'male') {
            if (maleFrequency[element.name] === undefined) {
                maleFrequency[element.name] = 1;
            } else {
                maleFrequency[element.name]++;
            }
            if (element.workload === 40) {
                if (maleFullTimeFrequency[element.name] === undefined) {
                    maleFullTimeFrequency[element.name] = 1;
                } else {
                    maleFullTimeFrequency[element.name]++;
                }
            }
        } else {
            if (femaleFrequency[element.name] === undefined) {
                femaleFrequency[element.name] = 1;
            } else {
                femaleFrequency[element.name]++;
            }
            if (element.workload !== 40) {
                if (femalePartTimeFrequency[element.name] === undefined) {
                    femalePartTimeFrequency[element.name] = 1;
                } else {
                    femalePartTimeFrequency[element.name]++;
                }
            }
        }
    });

    return {
        names: {
            all: allFrequency,
            male: maleFrequency,
            female: femaleFrequency,
            maleFullTime: maleFullTimeFrequency,
            femalePartTime: femalePartTimeFrequency
        },
        chartData: {
            all: convertToChartData(allFrequency),
            male: convertToChartData(maleFrequency),
            female: convertToChartData(femaleFrequency),
            maleFullTime: convertToChartData(maleFullTimeFrequency),
            femalePartTime: convertToChartData(femalePartTimeFrequency)
        }
    };
}

// Funkce pro převod frekvencí na formát { label, value }
function convertToChartData(frequency) {
    return Object.entries(frequency)
        .sort((a, b) => b[1] - a[1]) // Seřazení podle hodnoty sestupně
        .map(([label, value]) => ({ label, value })); // Převod na pole objektů
}

const dtoIn = {
    age: {
        min: 20,
        max: 40
    },
    count: 50 // Počet zaměstnanců, které chceme vygenerovat
};

let dtoOut = main(dtoIn);
console.log(JSON.stringify(dtoOut, null, 2));
