const container = document.querySelector("#container");
let divAmount = 16;
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetBox);
const resizeBtn = document.querySelector(".resize");

resizeBtn.addEventListener("click", resizeBox);

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

function resizeBox(){
    let divPrompt = +prompt("Enter a value between 1-100");
    if(typeof divPrompt == 'number' && isNaN(divPrompt) != true && divPrompt >= 1 && divPrompt <= 100){
        divAmount = divPrompt;
        return resetBox();
    }
    else{
        alert(`Answer must be a number and between 1 and 100!`);
            // re-runs the function when an unuseable answer is given
        return resizeBox();
    }
}


initializeBox();