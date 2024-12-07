
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
    console.log(cetnost);
    let maxEntry = Object.entries(cetnost).reduce((max, entry) => {
    return entry[1] > max[1] ? entry : max;
      }, ["", -Infinity]);
      
      return maxEntry; 
     
      
}

const dtoIn = {
    age: {
        min: 20,
        max: 40
    },
    count: 50// Počet zaměstnanců, které chceme vygenerovat
};
dtoOut=main(dtoIn)
console.log(dtoOut)