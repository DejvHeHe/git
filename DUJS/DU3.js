
//DU3 
function getRandom(range)
{
    return Math.floor(Math.random()*range);
}
function main(dtoIn) {
    let dtoOut = []; // Výstupní pole, do kterého budou přidáváni zaměstnanci
    const genderList = ["male", "female"]; // Možné pohlaví

    // Seznamy jmen pro muže a ženy
    const nameMalelist = [
        "Adam", "Jakub", "Michal", "David", "Tomáš",
        "Martin", "Jan", "Lukáš", "Petr", "Jiří",
        "Ondřej", "Matěj", "Daniel", "Filip", "Vojtěch",
        "Marek", "Roman", "Pavel", "Josef", "Václav",
        "Karel", "Michal", "Patrik", "Jaroslav", "Zdeněk",
        "Ladislav", "Stanislav", "Vít", "Radek", "Milan",
        "Boris", "Aleš", "Oldřich", "František", "Miroslav",
        "Zbyněk", "Lubomír", "Vladimír", "Igor", "Rostislav",
        "Vlastimil", "Bohumil", "Libor", "Radovan", "Norbert",
        "Šimon", "Matyáš", "Kryštof", "Dominik", "Samuel"
    ];

    const nameFemalelist = [
        "Anna", "Eliška", "Tereza", "Natálie", "Adéla",
        "Karolína", "Lucie", "Kristýna", "Veronika", "Nela",
        "Kateřina", "Marie", "Sofie", "Barbora", "Nikola",
        "Simona", "Klára", "Alžběta", "Michaela", "Petra",
        "Denisa", "Hana", "Markéta", "Andrea", "Vendula",
        "Viktorie", "Jana", "Jitka", "Irena", "Iveta",
        "Aneta", "Magdaléna", "Gabriela", "Marta", "Eva",
        "Olga", "Ludmila", "Ivana", "Lenka", "Zuzana",
        "Šárka", "Dagmar", "Pavlína", "Martina", "Blanka",
        "Jarmila", "Libuše", "Anežka", "Božena", "Radka"
    ];

    // Seznamy příjmení pro muže a ženy
    const surnameMalelist = [
        "Novák", "Svoboda", "Novotný", "Dvořák", "Černý",
        "Procházka", "Kučera", "Veselý", "Horák", "Němec",
        "Pokorný", "Marek", "Pospíšil", "Hájek", "Jelínek",
        "Král", "Růžička", "Beneš", "Fiala", "Sedláček",
        "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák",
        "Urban", "Vaněk", "Blažek", "Kříž", "Kovář",
        "Krejčí", "Holub", "Šimek", "Říha", "Konečný",
        "Malý", "Mach", "Pešek", "Hruška", "Matoušek",
        "Tůma", "Štěpánek", "Sýkora", "Vávra", "Bednář",
        "Kadlec", "Petr", "Kratochvíl", "Janda", "Soukup"
    ];

    const surnameFemalelist = [
        "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá",
        "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová",
        "Pokorná", "Marková", "Pospíšilová", "Háječková", "Jelínková",
        "Králová", "Růžičková", "Benešová", "Fialová", "Sedláčková",
        "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková",
        "Urbanová", "Vaňková", "Blažková", "Křížová", "Kovářová",
        "Krejčířová", "Holubová", "Šimková", "Říhová", "Konečná",
        "Malá", "Machová", "Pešková", "Hrušková", "Matoušková",
        "Tůmová", "Štěpánková", "Sýkorová", "Vávrová", "Bednářová",
        "Kadlecová", "Petrová", "Kratochvílová", "Jandová", "Soukupová"
    ];

    const workloadList = [10, 20, 30, 40]; // Možné úrovně zátěže (workload)

    // Výpočet minimálního a maximálního data narození
    const now = new Date().getTime();
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - dtoIn.age.max);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - dtoIn.age.min);
    const minDateMs = minDate.getTime();
    const maxDateMs = maxDate.getTime();

    // Cyklus pro generování záznamů zaměstnanců dle zadaného počtu (dtoIn.count)
    for (let i = 0; i < dtoIn.count; i++) {
        
        // Náhodně vybereme pohlaví
        let gender = genderList[getRandom(genderList.length)];
           
        // Vytvoření objektu zaměstnance
        let employee = {};
        employee.gender = gender;

        
        
        // Podle pohlaví vybereme jméno a příjmení
        if (gender === "male") {
            employee.name = nameMalelist[getRandom(nameMalelist.length)];
            employee.surname = surnameMalelist[getRandom(surnameMalelist.length)];
            
        } else {
            employee.name = nameFemalelist[getRandom(nameFemalelist.length)];
            employee.surname = surnameFemalelist[getRandom(surnameFemalelist.length)];
            
        }

        // Náhodně přidělíme workload
        employee.workload = workloadList[getRandom(workloadList.length)];

        // Náhodně vygenerujeme datum narození mezi minDateMs a maxDateMs
        const randomDateMs = Math.floor(Math.random() * (maxDateMs - minDateMs + 1)) + minDateMs;
        employee.birthdate = new Date(randomDateMs); // Převod na datumový formát
        
         

        // Přidáme zaměstnance do výstupního pole
        dtoOut.push(employee);
    }

    return dtoOut; // Vrácení pole zaměstnanců
}

// Parametry pro volání funkce
const dtoIn = {
    age: {
        min: 18,
        max: 40
    },
    count: 2
};

// Výpis výsledku do konzole
//console.log(JSON.stringify(main(dtoIn), null, 2));
module.exports = main;