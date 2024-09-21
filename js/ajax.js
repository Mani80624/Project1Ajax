console.log('Hola desde consola');

document.querySelector("#button_ajax").addEventListener("click",dataGet);
function dataGet(){
    const http = new XMLHttpRequest();
    http.open("GET","/txt/archivo.txt");
    http.send();
}