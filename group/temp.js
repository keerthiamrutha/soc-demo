const newDiv=document.createElement("div");
newDiv.id="myDiv";
newDiv.textContent="hello , i am a new div";
document.body.appendChild(newDiv);

const accessedDiv=document.getElementById("myDiv");
const abc=accessedDiv.textContent;
console.log(accessedDiv.textContent);