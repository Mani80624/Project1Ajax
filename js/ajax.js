console.log('Hola desde consola');

document.querySelector("#button_ajax").addEventListener("click",dataGet);
function dataGet(){
    const http = new XMLHttpRequest();
    // True porque es asincronico 
    http.open("GET","/txt/archivo.txt", true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // Verificar en consola
            //console.log(this.responseText);
            document.querySelector("#answer").innerHTML = this.responseText;
        }
    }
}