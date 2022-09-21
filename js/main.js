let total = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36] 

let old_id = 100



/*----- cached element references -----*/
const resetBtnEl = document.getElementById('reset')
const messageDisplayEl = document.querySelector('h2')


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

function 
//function init() {
//}

//init();