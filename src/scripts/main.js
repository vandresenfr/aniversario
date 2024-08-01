const dataAniversario = new Date('Sep 14, 2024 15:00:00')
const timeStampDoAniversario = dataAniversario.getTime();

const contaAsHoras = setInterval(function(){

const dataAtual = new Date();
const timeStampAtual = dataAtual.getTime();

const tempoAteOAniversario = timeStampDoAniversario - timeStampAtual;

const diasEmMs = 1000 * 60 * 60 * 24;
const horasEmMs = 1000 * 60 * 60;
const minutosEmMs = 1000 * 60; 
const segundosEmMs = 1000;

const diasAteOAniversario = Math.floor(tempoAteOAniversario / (diasEmMs));
const horasAteOAniversario = Math.floor(tempoAteOAniversario % (diasEmMs) / (horasEmMs));
const minutosAteOAniversario = Math.floor(tempoAteOAniversario % (horasEmMs) / (minutosEmMs));
const segundosAteOAniversario = Math.floor(tempoAteOAniversario % (minutosEmMs) / (segundosEmMs));

document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

if (timeStampAtual > timeStampDoAniversario){
    clearInterval(contaAsHoras)
    document.getElementById('contador').innerHTML = 'Chegou o dia!!!'
}

},1000)