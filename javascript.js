const container = document.querySelector("#container");

let divAmount = 16;
let color = 'black';
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetBox);

const resizeBtn = document.querySelector(".resize");
resizeBtn.addEventListener("click", resizeBox);

const RGBBtn = document.querySelector(".rainbow");
RGBBtn.addEventListener("click", RGB);

const blackBtn = document.querySelector(".black");
blackBtn.addEventListener("click", black);

const grayBtn = document.querySelector(".gray");
grayBtn.addEventListener("click", gray);

function black(){
    color = 'black';
    resetBox();
}
function RGB(){
    color = 'RGB';
    resetBox();
}
function gray(){
    color = 'gray';
    resetBox();
}
let grayIntensity = 0.1;

function initializeBox(color){
    for(let i = 0;i< (divAmount*divAmount);i++){
        let divBox = document.createElement('div');
        divBox.classList.add("empty");
        divBox.style.flex = (100/divAmount) + "%";
        divBox.style.paddingTop = (100/divAmount) + "%";
        container.appendChild(divBox);
        divBox.addEventListener("mouseover", hoverColor);
        function hoverColor(){  
          
            if(color == 'black'){
                divBox.classList.remove("empty");
                divBox.classList.add("filled");
            }
            else if(color == 'RGB'){
                divBox.classList.remove("empty");
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                divBox.style.backgroundColor = "#" + randomColor;
            }
            else if(color == 'gray'){
                let divStyle = window.getComputedStyle(divBox).getPropertyValue("background-color");
                let divParts = divStyle.match(/[\d.]+/g) //returns an array of each digit/value in the background-color RGB(0, 0, 0) returns 0,0,0;
                divBox.classList.remove("empty");
                if(divParts.length === 3 && divParts.includes('255') == true){ //RGB has 3 values while RGBA has 4. RGBA becomes RGB when Alpha = 1
                    divBox.style.backgroundColor = "rgba(0, 0, 0, 0.1)"
                }
                else if(divParts.length === 4){
                    let divIntensity = divStyle.substring(15,17)
                    divBox.style.backgroundColor = `rgba(0,0,0,` + (+divIntensity + 0.1) + `)`;
                }
            }
            else{
                console.log("You made an oopsie in your code!");
            }
        }        
    }
}



function resetBox(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    initializeBox(color);
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


initializeBox(color);