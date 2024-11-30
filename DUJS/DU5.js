
function main(dtoIn)
{   const generateEmployeeData = require('./DU3.js');  
    const pracovnici=generateEmployeeData(dtoIn);

    let cetnost={};
    pracovnici.forEach(element => {
        if (cetnost[element.name] === undefined) {
            cetnost[element.name] = 1;
        } else {
            cetnost[element.name]++;
        }   

    });
    return cetnost;
}

const dtoIn = {
    age: {
        min: 20,
        max: 40
    },
    count: 50// Počet zaměstnanců, které chceme vygenerovat
};
dtoOut=main(dtoIn)
console.log(JSON.stringify(dtoOut, null, 2))