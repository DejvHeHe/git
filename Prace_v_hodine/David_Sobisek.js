const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "students_practice_dataset.json"), {
    encoding: "utf8",
    flag: "r",
  })
);
let count=0;
let postsList=data.posts;

for(let i=0;i<postsList.length;i++)
{
   let post=postsList[i];
   count=post.comments.length;
   console.log(post.post_id+":"+count);
   if(count>3)
   {
    console.log(post);
   }
   

}