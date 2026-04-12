function alternarTema() {
    const corpo = document.body;
    const icone = document.getElementById("icone-tema");
    const texto = document.getElementById("texto-tema");

    corpo.classList.toggle("dark-theme");

    if (corpo.classList.contains("dark-theme")) {
        icone.innerText = "☀️";
        texto.innerText = "Tema Claro";
        localStorage.setItem("tema", "dark");
    } else {
        icone.innerText = "🌙";
        texto.innerText = "Tema Escuro";
        localStorage.setItem("tema", "light");
    }
}

window.onload = () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "dark") {
        document.body.classList.add("dark-theme");
        document.getElementById("icone-tema").innerText = "☀️";
        document.getElementById("texto-tema").innerText = "Tema Claro";
    }
};

function abrirJogo() {
    const elementoJogo = document.documentElement; // Isso pega o site inteiro

    // Verifica se o navegador suporta o pedido de tela cheia
    if (elementoJogo.requestFullscreen) {
        elementoJogo.requestFullscreen();
    } else if (elementoJogo.webkitRequestFullscreen) { /* Safari */
        elementoJogo.webkitRequestFullscreen();
    } else if (elementoJogo.msRequestFullscreen) { /* IE11 */
        elementoJogo.msRequestFullscreen();
    }

}