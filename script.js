let listaTeclas = document.querySelectorAll(".tocarMusica");
let listaAudios = document.querySelectorAll("audio");
let imgCantora = document.querySelector(".img_cantora");

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
    let instrumento = tecla.classList[1].replace("tecla_", "");
    let audio = `#tocar_musica_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(audio);
        tecla.classList.add("tocando");
        
        if (imgCantora) {
            imgCantora.src = `../assets/image/${instrumento}.png`;
        }
    };

    contador++;
}

