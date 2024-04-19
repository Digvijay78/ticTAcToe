var restart = document.querySelector("#b");

var squares = document.querySelectorAll('td')

function clearBoard(){

    for (let i = 0; i< squares.length; i++) {
      squares[i].textContent = "";
       
    }
}

restart.addEventListener("click", clearBoard)

function changeMarker() {

    if(this.textContent === ""){
       this.textContent = "X";  
    } else if (this.textContent === "X") {
        this.textContent = "O";
} else {
    this.textContent = "";
}
}

for (let index = 0; index < squares.length; index++) {
   squares[index].addEventListener("click", changeMarker)    
}