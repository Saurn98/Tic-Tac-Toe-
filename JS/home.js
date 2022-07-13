player1 = document.getElementById("oneuser")
player2 = document.getElementById("twouser")
function start(){
    enter();
}

function enter(){
    sessionStorage.setItem("player1username", player1.value);
    sessionStorage.setItem("player2username", player2.value);
    window.location = "../game.html";
}

window.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        enter();
    }
})
