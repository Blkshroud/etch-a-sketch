const container = document.querySelector("#container");
let divAmount = 16;

for(let i = 0;i< (divAmount*divAmount);i++){
    const divBox = document.createElement('div');
    divBox.classList.add("empty");
    container.appendChild(divBox);
}

