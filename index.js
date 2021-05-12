document.querySelector("#main").remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");

document.body.appendChild(newHeader);

newHeader.innerHTML = "Eric is the champion"
