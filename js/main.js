 



/*----- app's state (variables) -----*/
let selected_ids, winNum, wallet,bet, win

/*----- cached element references -----*/
const resetBtnEl = document.getElementById('reset')
const exitBtnEl = document.getElementById('exit')
const spinBtnEl = document.getElementById('spin')
const messageDisplayEl = document.querySelector('h2')
const walletDisplayEl = document.querySelector('h3')
const betDisplayEl = document.querySelector('h4')




/*----- event listeners -----*/
resetBtnEl.addEventListener('click', init)
exitBtnEl.addEventListener('click', exitcash)

spinBtnEl.addEventListener('click', handleSpinClick)
// boardEl.addEventListener('click', handleBoardClick)
// bet.add


function exitcash(){
    alert("Have a good day and Thank you for Playing, your balance is: " + wallet);
    
}

for (let id=0; id<=36;id++) {
        document.getElementById(id).addEventListener("click", buttonPressed)
    }
    document.getElementById('red').addEventListener("click", buttonPressed)
    document.getElementById('black').addEventListener("click", buttonPressed)



function buttonPressed(evt) {
    if (selected_ids.includes(evt.target.id)){
    document.getElementById(evt.target.id).style.backgroundColor = "";
    selected_ids.splice(selected_ids.indexOf(evt.target.id) ,1)
    }else{
    selected_ids.push(evt.target.id)
    document.getElementById(evt.target.id).style.backgroundColor = "blue";
    }

    bet = selected_ids.length;
    render();
}

 function init() {
     wallet = 50
     bet = 0
     selected_ids= [];
     winNum = ""
     win = false;
     messageDisplayEl.style.backgroundColor = "";
     render();
 }

 init();

function checkWin() {
    win = false;
    if (selected_ids.includes(winNum.toString())) {
        wallet = wallet + 36
        win = true;
    }

    if ((selected_ids.includes('black')) && (document.getElementById(winNum.toString()).className === 'black')){
        wallet = wallet + 2
        win = true;
    }

    if ((selected_ids.includes('red')) && (document.getElementById(winNum.toString()).className === 'red')){
        wallet = wallet + 2
        win = true;
    }

    wallet = wallet - bet; 
}



// function handleResetClick() {
//     init()
//     }

function handleSpinClick() {
    
    winNum = Math.floor(Math.random() * 36) 
    if (selected_ids.length<1){
        messageDisplayEl.innerText = "place your bets first"
    }else{
            checkWin();       
        }
    selected_ids.forEach(emptySelection)
    selected_ids = []
    bet =""
    render()
}

function emptySelection(id){
    document.getElementById(id).style.backgroundColor = "";
}

function render() {

    walletDisplayEl.innerText = "Your Bank " + wallet
    betDisplayEl.innerText = "Your Bet " + bet

    if (winNum !== "") {
    if (win){
        messageDisplayEl.innerText = "You have won and winner is #" + winNum
        messageDisplayEl.style.backgroundColor = "green";
    }else{
        messageDisplayEl.innerText = "You have not won! winner is #" + winNum
        messageDisplayEl.style.backgroundColor = "red";
    }
}else{
    messageDisplayEl.innerText = "Place your bet & Spin"
}
    
}
