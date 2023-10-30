let elMeter = document.getElementById("cpu-meter");

function reducirCPU() {
    elMeter.value -= 10;
}

function aumentarCPU() {
    elMeter.value += 10;
}

///////////////////

let elDescarga = document.getElementById("descarga");

function descarga() {
    setInterval(increment, 1000);
}

function increment() {
    if(elDescarga.value < 100) {
        elDescarga.value += 10;
        increment()
    }
}