
let pracovnici = [
    { name: "Adam" },
    { name: "Adam" },
    {name:"David"}
];

let cetnost={};
pracovnici.forEach(element => {
    if (cetnost[element.name] === undefined) {
        cetnost[element.name] = 1;
    } else {
        cetnost[element.name]++;
    }
    

});
console.log(cetnost);