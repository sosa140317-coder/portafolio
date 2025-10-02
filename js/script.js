document.addEventListener("DOMContentLoaded", () => {
    // Almacenamos los id a trabajar dentro de sus variables modal - modalImg
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");

    const imagenes = document.querySelectorselectorAll(".flip-card-back");

    imagenes.forEach(img => {
        img.addEventListener("click"), () =>
            modal,Style.display = "flex";
            modalImg.scr = img.scr;
        });
    });

    const cerrar = document.querySelector(".cerrar");
 
    const imagenes = document.querySelectorAll(".flip-card-back img");
 
    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });
 
    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });
 
    modal.addEventListener("click", (e) => {
        if(e.target === modal){
            modal.style.display = "none";
        }
    });
});

 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAM-8HmFdE9-eqFxBF9MXFjiuNRg49VNE0",
    authDomain: "form-page-d6e62.firebaseapp.com",
    projectId: "form-page-d6e62",
    storageBucket: "form-page-d6e62.firebasestorage.app",
    messagingSenderId: "162486962289",
    appId: "1:162486962289:web:b9c7095a87c2c68966b3d0",
    measurementId: "G-TCJPGMEE3Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  const form = document.-getElementById("contacto-form");

  form.addEventListener("submit", async(e) => {
      e.preventDefault();
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const asunto = document.getElementById("asunto");
        const mensaje = document.getElementById("mensaje");
 
        try{
            await addDoc(collection(db, "Clientes"),{
                nombre: nombre,
                email: email,
                asunto: asunto,
                mensaje: mensaje,
                fecha: new Date()
            });
            console.log("Datos enviados");
            alert("Solicitud enviada");
            form.reset();
        } catch(error){
            console.log("Error al enviar datos");
            alert("Hubo un error al enviar datos");
        }








/*
let nombres = "Jorge Sosa";
let datos = ["Jorge Sosa", "SENATI", "Alumno"];

console.log(nombres);
console.log(datos[2]);

//Esto es un comentario
let edad = prompt("Ingresa tu edad: ");
console.log(edad);

//Trabajando con funciones
function mostrarMensaje(){
