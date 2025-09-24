AOS.init();
document.addEventListener('DOMContentLoaded', ()=>{
    const dataInicio = new Date("Sep 12, 2015, 00:00:00");
    const contadorElemento = document.getElementById('contador');
    const atualizarContador = setInterval(function() {
        const agora = new Date();
        let anos = agora.getFullYear() - dataInicio.getFullYear();
        let meses = agora.getMonth() - dataInicio.getMonth();
        let dias = agora.getDate() - dataInicio.getDate();
        let horas = agora.getHours() - dataInicio.getHours();
        let minutos = agora.getMinutes() - dataInicio.getMinutes();
        let segundos = agora.getSeconds() - dataInicio.getSeconds();
        if (segundos < 0) {
            segundos += 60;
            minutos--;
        }
        if (minutos < 0) {
            minutos += 60;
            horas--;
        }
        if (horas < 0) {
            horas += 24;
            dias--;
        }
        if (dias < 0) {
            const ultimoDiaDoMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
            dias += ultimoDiaDoMesAnterior;
            meses--;
        }
        if (meses < 0) {
            meses += 12;
            anos--;
        }
        const tempoJuntos = `${anos}a ${meses}m ${dias}d ${horas}h ${minutos}m ${segundos}s`;
        if (contadorElemento) contadorElemento.innerHTML = tempoJuntos;
        console.log(tempoJuntos);
    }, 1000);
});

//# sourceMappingURL=metal-gear.900caf0b.js.map
