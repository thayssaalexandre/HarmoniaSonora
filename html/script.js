let listaTeclas = document.querySelectorAll(".tocarMusica");
let listaAudios = document.querySelectorAll("audio");

function tocarSom(idElementoSom) {
    for (let i = 0; i < listaAudios.length; i++) {
        listaAudios[i].pause();
        listaAudios[i].currentTime = 0;
    }

    for (let i = 0; i < listaTeclas.length; i++) {
        listaTeclas[i].classList.remove("tocando");
    }

    document.querySelector(idElementoSom).play();
}

let contador = 0;

while (contador < listaTeclas.length) {

    let tecla = listaTeclas[contador];
    let instrumento = tecla.classList[1];
    let audio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(audio);
        tecla.classList.add("tocando");
    }

    contador++;
}