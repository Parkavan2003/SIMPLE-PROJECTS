const button = document.querySelector(".btn");
const backGround = document.querySelector(".container");
const hexCode = document.querySelector(".hex");

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

button.addEventListener("click",()=>{
    hexColor = "#";
    for(let i=0;i<6;i++){
        hexColor += hex[randomIndex()];
    }
    hexCode.textContent = hexColor;
    backGround.style.backgroundColor = hexColor;
})

// For Random Index Generation
function randomIndex(){
    return Math.floor(Math.random() * hex.length);
}