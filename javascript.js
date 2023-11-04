const container = document.querySelector("#container");
let divAmount = 16;
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetBox);

function initializeBox(){
    for(let i = 0;i< (divAmount*divAmount);i++){
        let divBox = document.createElement('div');
        divBox.classList.add("empty");
        divBox.style.flex = (100/divAmount) + "%";
        divBox.style.paddingTop = (100/divAmount) + "%";
        container.appendChild(divBox);
        divBox.addEventListener("mouseover", hoverColor);
        function hoverColor(){
            divBox.classList.remove("empty");
            divBox.classList.add("filled");
        }
    }
}
function resetBox(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    initializeBox();
}

function getNewSize(){

}

initializeBox();