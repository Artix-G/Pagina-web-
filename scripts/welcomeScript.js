document.addEventListener("DOMContentLoaded", function() {

const lang = navigator.language || navigator.userLanguage;

function showMessage(tittle) {
    document.getElementById("message-tittle").textContent = tittle;
    document.getElementById("myMessage").style.display = "flex";
}

window.onload = function() {

    if (lang.startsWith("es") && !sessionStorage.getItem("bienvenidaMostrada")) {
        showMessage("Bienvenido! :D");
        sessionStorage.setItem("bienvenidaMostrada", "true");
    } else if (lang.startsWith("en") && !sessionStorage.getItem("bienvenidaMostrada")) {
        showMessage("Welcome! :D");
        sessionStorage.setItem("bienvenidaMostrada", "true");
    } else if (lang.startsWith("fr") && !sessionStorage.getItem("bienvenidaMostrada")) {
        showMessage("Bonjour! :D");
        sessionStorage.setItem("bienvenidaMostrada", "true");
    } else if(lang.startsWith("zh-CN") || lang.startsWith("zh-SG") && !sessionStorage.getItem("bienvenidaMostrada")){
        showMessage("你好！:D");
        sessionStorage.setItem("bienvenidaMostrada", "true");
    } else {
        return;
    }
};})

function closeMessage() {
    document.getElementById("myMessage").style.display = "none";
}