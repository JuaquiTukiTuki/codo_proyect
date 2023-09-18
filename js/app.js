

// Sección constantes
const navbar_lista = document.querySelector(".nav_bar_list");
const boton_lista_nav = document.querySelector(".lista_btn");

// Sección funciones
function mostrar_lista() {
    navbar_lista.classList.toggle('visible')
}

// Sección funcionalidades
boton_lista_nav.addEventListener('click', mostrar_lista)