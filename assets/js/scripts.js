var currentNuberwarapper = document.getElementById("currentNumber")
var currentNuber = 0;
function increment() {
    currentNuber = currentNuber + 1;
    currentNuberwarapper.innerHTML = currentNuber;
}

function decrement() {
    currentNuber = currentNuber - 1;
    currentNuberwarapper.innerHTML = currentNuber;
}
