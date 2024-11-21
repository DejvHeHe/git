
let pracovnici = [
    { name: "Adam" },
    { name: "Adam" },
    {name:"David"}
];

let cetnost={};
pracovnici.forEach(element => {
    if(element.name===undefined)
    {
        cetnost.count=1;
    }
    else
    {
        cetnost.count++;
    }

});
console.log(cetnost);