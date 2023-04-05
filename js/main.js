let henk = Math.random() * 10; 
henk = Math.ceil(henk);
console.log(henk);

function reset() {
    window.location.reload();
}

function hoger() {
    document.getElementById("cijfer").innerHTML = henk
    if (henk > 5) {
        document.getElementById('textField').innerHTML =
            "Je heb gewonnen";
    } else {
        document.getElementById('textField').innerHTML =
            "Je heb verloren";
    }
}

function lager() {
    document.getElementById("cijfer").innerHTML = henk
    if (henk <= 5) {
        document.getElementById('textField').innerHTML =
            "Je heb gewonnen";
    } else {
        document.getElementById('textField').innerHTML =
            "Je heb verloren";
    }
}



