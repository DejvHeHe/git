// Hlavní funkce programu
// Zpracuje vstupní parametry dtoIn, vygeneruje seznam zaměstnanců a vrátí výslednou statistiku
function main(dtoIn) {
    const generateEmployeeData = require('./DU3.js'); // Načtení funkce pro generování zaměstnanců

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
    const statistics = getEmployeeStatistics(listOfEmployees);

    // Příprava a návrat výsledných dat
    const dtoOut = {
        employees: listOfEmployees, // Vygenerovaný seznam zaměstnanců
        statistics: statistics // Vypočítané statistiky
    };

    return dtoOut;
}

// Funkce pro výpočet statistik zaměstnanců
// Analyzuje seznam zaměstnanců a vrací různé statistiky
function getEmployeeStatistics(listOfEmployees) {
    const total = listOfEmployees.length; // Celkový počet zaměstnanců

    // Počítadla pro zaměstnance podle typu úvazku
    let workload10 = 0, workload20 = 0, workload30 = 0, workload40 = 0;

    // Počítadla a součty specifické pro zaměstnankyně
    let countOffemaleEmployee = 0;
    let sumaWorkloadFemale = 0;

    // Proměnné pro analýzu věku zaměstnanců
    let ageList = [];
    let sumaAge = 0;

    // Seřazení zaměstnanců podle workloadu (pracovní úvazek)
    const sortedByWorkload = listOfEmployees.sort((a, b) => a.workload - b.workload);

    // Iterace přes všechny zaměstnance a výpočet statistik
    for (let i = 0; i < total; i++) {
        const employee = listOfEmployees[i];

        // Počítání zaměstnanců podle úvazku (10, 20, 30, 40 hodin)
        switch (employee.workload) {
            case 10:
                workload10++;
                break;
            case 20:
                workload20++;
                break;
            case 30:
                workload30++;
                break;
            case 40:
                workload40++;
                break;
        }

        // Počítání zaměstnankyň a součet jejich úvazků
        if (employee.gender === "female") {
            countOffemaleEmployee++;
            sumaWorkloadFemale += employee.workload;
        }

        // Výpočet věku zaměstnance a přidání do seznamu
        const age = calculateAge(employee.birthdate);
        ageList.push(age);
        sumaAge += age;
    }

    // Výpočet průměrného věku všech zaměstnanců
    const averageAge = sumaAge / total;

    // Extrahování workloadu do samostatného pole
    const workloadListsorted = sortedByWorkload.map(employee => employee.workload);

    // Výpočet průměrného úvazku zaměstnankyň
    const averageWomenWorkload = countOffemaleEmployee > 0 ? sumaWorkloadFemale / countOffemaleEmployee : 0;

    // Vrácení všech vypočítaných statistik
    return {
        total: total, // Celkový počet zaměstnanců
        workload10: workload10, // Počet zaměstnanců s úvazkem 10 hodin
        workload20: workload20, // Počet zaměstnanců s úvazkem 20 hodin
        workload30: workload30, // Počet zaměstnanců s úvazkem 30 hodin
        workload40: workload40, // Počet zaměstnanců s úvazkem 40 hodin
        averageAge: averageAge.toFixed(1), // Průměrný věk zaměstnanců
        maxAge: Math.max(...ageList), // Maximální věk
        minAge: Math.min(...ageList), // Minimální věk
        medianAge: getMedian(ageList), // Medián věku
        medianWorkload: getMedian(workloadListsorted), // Medián úvazku
        averageWomenWorkload: averageWomenWorkload, // Průměrný úvazek zaměstnankyň
        sortedByWorkload: sortedByWorkload // Zaměstnanci seřazení podle úvazku
    };
}

// Funkce pro výpočet věku na základě data narození
function calculateAge(birthdate) {
    const now = new Date(); // Aktuální datum
    let age = now.getFullYear() - birthdate.getFullYear(); // Hrubý výpočet věku
    const monthDifference = now.getMonth() - birthdate.getMonth(); // Rozdíl v měsících
    const dayDifference = now.getDate() - birthdate.getDate(); // Rozdíl ve dnech

    // Korekce věku, pokud narozeniny ještě nebyly v aktuálním roce
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    return age;
}

// Funkce pro výpočet mediánu z pole hodnot
function getMedian(range) {
    const mid = Math.floor(range.length / 2); // Střední index pole
    range.sort((a, b) => a - b); // Seřazení pole vzestupně
    return range.length % 2 === 0 
        ? (range[mid - 1] + range[mid]) / 2 // Pokud je pole sudé, medián je průměr dvou prostředních hodnot
        : range[mid]; // Pokud je pole liché, medián je prostřední hodnota
}

// Příklad vstupních dat pro testování
const dtoIn = {
    age: {
        min: 20, // Minimální věk
        max: 40  // Maximální věk
    },
    count: 10 // Počet zaměstnanců, které chceme vygenerovat
};

// Spuštění hlavní funkce a zobrazení výstupu
const dtoOut = main(dtoIn);
console.log(JSON.stringify(dtoOut, null, 2));
