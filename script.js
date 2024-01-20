let boxesElements = document.querySelectorAll(".box");
let restartEl = document.querySelector("#restart-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;


const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxesElements.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "green"
            turnO = false;
        }else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const resetGame  = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = ()=>{
    for (let box of boxesElements){
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
    for (let box of boxesElements){
        box.disabled = false;
        box.innerText = "";
    }
};



const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes()

};



const checkWinner = ()=>{
    for (let pattern of winPattern){
        let pVal1 = boxesElements[pattern[0]].innerText;
        let pVal2 = boxesElements[pattern[1]].innerText;
        let pVal3 = boxesElements[pattern[2]].innerText;

        if(pVal1 != "" && pVal2 != "" && pVal3 != ""){
            if (pVal1 ===pVal2 && pVal2 === pVal3){
                console.log("Winner", pVal1);
                showWinner(pVal1)
            }
        }
    }
};




newGameBtn.addEventListener("click", resetGame );
restartEl.addEventListener("click", resetGame );