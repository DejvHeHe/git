let students=
[
    {
        name:"Bedrich",
        surname:"Novak",
        year:4
    },
    {
        name:"Ales",
        surname:"Smetana",
        year:1
    },
    {
        name:"Tereza",
        surname:"Novakova",
        year:3
    },
    {
        name:"Libor",
        surname:"Zelenka",
        year:4
    },

]
function compareStudents(a,b)
{
    //let aFullName=;
    //let bFullName=();

}
function sortStudents(dtoIn)
{
    for(let currentPlace=0;currentPlace<dtoIn.length;currentPlace++)
    {
        
        let minYear=dtoIn[currentPlace].year;
        for(let i=currentPlace;i<students.length;i++)
        {
            let currentYear=dtoIn[i].year;
            
            
            if(minYear>currentYear)
            {
                minYear=currentYear;
                let temporary=dtoIn[currentPlace];
                dtoIn[currentPlace]=dtoIn[i];
                dtoIn[i]=temporary
            }

        }
        
    }
    return dtoIn;
    

}
console.log(JSON.stringify(sortStudents(students), null, 2));