let total = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36] 

let old_id = 100

/*----- app's state (variables) -----*/
let winner, board

/*----- cached element references -----*/
const resetBtnEl = document.getElementById('reset')
const exitBtnEl = document.getElementById('exit')
const spinBtnEl = document.getElementById('spin')
const messageDisplayEl = document.querySelector('h2')


/*----- event listeners -----*/
// resetBtnEl.addEventListener('click', handleResetClick)
spinBtnEl.addEventListener('click', handleSpinClick)
// boardEl.addEventListener('click', handleBoardClick)
// bet.add

function myFunction(event) { 
    alert(event.target.id);
  }

for (let id=0; id<=36;id++) {
        document.getElementById(id).addEventListener("click", buttonPressed)
    }


function buttonPressed(evt) {
    document.getElementById(evt.target.id).style.backgroundColor = "blue";
    if (old_id !== 100){
        document.getElementById(old_id).style.backgroundColor = "";
    }
    old_id=evt.target.id;
}

// function init() {
//     board = [null, null, null, null, null, null, null, null, null]
//     bank = 50
// }


// function checkWin() {
//     if (bet.id === winNum) {
//         messageDisplayEl.innerText = 'Win'
//     }else{
//         messageDisplayEl.innerText = 'No Win'
//     }


// function handleResetClick() {
//     init()
//     }

function handleSpinClick() {
    let winNum = Math.floor(Math.random() * 36) 
    return }

function bet() {
    let bet = 0
}