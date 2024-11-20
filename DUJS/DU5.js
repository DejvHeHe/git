let Jmena = ["Adam", "Tomáš","David"];
let pracovnici = [
    { name: "Adam" },
    { name: "Adam" },
    {name:"David"}
];

let pocet = 0;
let cetnostPole = [];

for (let i = 0; i < Jmena.length; i++) {
    let cetnost = {};
    let AktualniJmeno = Jmena[i];
    cetnost.name = AktualniJmeno;
    for (let x = 0; x < pracovnici.length; x++) {
        if (AktualniJmeno === pracovnici[x].name) {
            pocet++;
        }
    }
    cetnost.count = pocet;
    cetnostPole.push(cetnost);
    pocet = 0; // reset počítadla
}

// Najít maximum
let max = 0;
let maxJmeno = "";
for (let y = 0; y < cetnostPole.length; y++) {
    if (cetnostPole[y].count > max) {
        max = cetnostPole[y].count;
        maxJmeno = cetnostPole[y].name;
    }
}
console.log(cetnostPole);
console.log(`Maximální počet: ${max}, Jméno: ${maxJmeno}`);
