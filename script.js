function updateClock() {
    const data = new Date();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    document.getElementById("hour").textContent = horas;
    document.getElementById("minute").textContent = minutos;
    document.getElementById("second").textContent = segundos;
}

setInterval(updateClock, 1000);
updateClock();
