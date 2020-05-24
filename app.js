const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeleft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = Number(timeleft.textContent);

// Agrega de forma aleatoria la clase mole
// Math.floor(): Devuelve el máximo entero menor o igual a un número.
/*
 Math.random(): retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1). 
Esto es, desde el 0 (Incluido) hasta el 1 pero sin incluirlo (excluido), el cual se pu
*/

// className obtiene y establece el valor del atributo class de un elemento HTML
// className permite agregar o eliminar clases, pero si lo haces te eliminara otra clases que ya esten agregadas
// classlist devuelve una colección activa de DOMTokenList de los atributos de clase del elemento.
// classList permite agregar o eliminar clases, esta interfaz no afectara a las clases ya establecidas

function randomSquare(){
    square.forEach(clase => {
        // className contiene el nombre de la clase por cada elemento del array
        clase.classList.remove('mole');
    });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    // Agregamos la clase mole al elemento seleccionado de forma aleatoria
    randomPosition.classList.add('mole');
    // assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id;
}
// Agregamos el listener a cada elemento y verificamos si le atino
square.forEach(elemento => {
    elemento.addEventListener('mouseup', () => {
        if (elemento.id === hitPosition){
            result = result + 1;
            score.textContent = result;
        }
    })
})

// Funcion que mueve el topo
var timerId;
function moveMole(){
    // Se ejecuta la funcion mueve el topo cada 1000 milisegundos
    timerId = setInterval(randomSquare, 1000);
}
moveMole();
// Se crea y ejecuta el contador de tiempo
var timeId = setInterval(countDown, 1000);
function countDown(){
    currentTime --;
    timeleft.textContent = currentTime;
    if(currentTime === 0){
        clearInterval(timerId);
        clearInterval(timeId);
        alert("GAME OVER, Your final score is" + result);
    }
}
