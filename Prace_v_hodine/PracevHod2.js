const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "assignment_practice_dataset.json"), {
    encoding: "utf8",
    flag: "r",
  })
);
let dtoOut={};
for(let i=0;i<data.users.length;i++)
{
    let curentUserId = data.users[i].id;
    let eventList=[];
    
    for(let x=0;x<data.events.length;x++)
    {
        let curentEventId=x;
        if (data.events[curentEventId].participants.includes(data.users[curentUserId].id))
        {
            eventList.push(curentEventId);
        }

    }
    dtoOut[data.users[i].id] = eventList;

    
}
console.log(JSON.stringify(dtoOut, null, 2));