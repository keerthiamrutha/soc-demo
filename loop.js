let i=0
while(i<5){
  console.log(i);
  i++;
}

let j = 1;
while (j <= 10) {
  console.log("5 x " + j + " = " + 5 * j);
  j++;
}


const newparagraph = document.createElement("p");
newparagraph.textContent = "This is a new paragraph added by JavaScript.";
document.body.appendChild(newparagraph);
//add an event listener
mydiv.addvntListener("click", () => {
    alert("Paragraph clicked!");
});