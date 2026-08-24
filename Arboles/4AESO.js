
 /** * Script generado para inserción de árbol */

  function insertarArbol() { 
    const ArbolHTML = `<ul>
 <li>
  <div class="folder"
       id="1."
       nivel="1"
       imagen="Imagenes/4AESO/libro1.png"
       imagen2="Imagenes/4AESO/libro1_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.01 Numeros_Racionales.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.')">

    <img  class="manImg" src="Imagenes/4AESO/libro1.png">
    <span style="display: none;">1.</span>
    <span class="Arbol_Nombre_2">1. Numeros Racionales.</span>
  </div></li>
 <li>
  <div class="folder"
       id="2."
       nivel="1"
       imagen="Imagenes/4AESO/libro2.png"
       imagen2="Imagenes/4AESO/libro2_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.02 Proporcionalidad_PC.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'2.')">

    <img  class="manImg" src="Imagenes/4AESO/libro2.png">
    <span style="display: none;">2.</span>
    <span class="Arbol_Nombre_2">2. Proporcionalidad y Porcentajes.</span>
  </div></li>
 <li>
  <div class="folder"
       id="3."
       nivel="1"
       imagen="Imagenes/4AESO/libro1.png"
       imagen2="Imagenes/4AESO/libro1_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.03 NumerosReales.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'3.')">

    <img  class="manImg" src="Imagenes/4AESO/libro1.png">
    <span style="display: none;">3.</span>
    <span class="Arbol_Nombre_2">3. Números Reales.</span>
  </div></li>
 <li>
  <div class="folder"
       id="4."
       nivel="1"
       imagen="Imagenes/4AESO/libro5.png"
       imagen2="Imagenes/4AESO/libro5_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.04 Algebra.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'4.')">

    <img  class="manImg" src="Imagenes/4AESO/libro5.png">
    <span style="display: none;">4.</span>
    <span class="Arbol_Nombre_1">4. Polinomios</span>
  </div></li>
 <li>
  <div class="folder"
       id="5."
       nivel="1"
       imagen="Imagenes/4AESO/libro6.png"
       imagen2="Imagenes/4AESO/libro6_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.05 Ecuaciones.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'5.')">

    <img  class="manImg" src="Imagenes/4AESO/libro6.png">
    <span style="display: none;">5.</span>
    <span class="Arbol_Nombre_1">5. Ecuaciones</span>
  </div></li>
 <li>
  <div class="folder"
       id="6."
       nivel="1"
       imagen="Imagenes/4AESO/libro5.png"
       imagen2="Imagenes/4AESO/libro5_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.06 Sistemas Ecuaciones.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'6.')">

    <img  class="manImg" src="Imagenes/4AESO/libro5.png">
    <span style="display: none;">6.</span>
    <span class="Arbol_Nombre_1">6. Sistemas de Ecuaciones</span>
  </div></li>
 <li>
  <div class="folder"
       id="7."
       nivel="1"
       imagen="Imagenes/4AESO/libro1.png"
       imagen2="Imagenes/4AESO/libro1_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.07 Funciones.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'7.')">

    <img  class="manImg" src="Imagenes/4AESO/libro1.png">
    <span style="display: none;">7.</span>
    <span class="Arbol_Nombre_2">7. Funciones</span>
  </div></li>
 <li>
  <div class="folder"
       id="8."
       nivel="1"
       imagen="Imagenes/4AESO/libro3.png"
       imagen2="Imagenes/4AESO/libro3_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.08 Geometría.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'8.')">

    <img  class="manImg" src="Imagenes/4AESO/libro3.png">
    <span style="display: none;">8.</span>
    <span class="Arbol_Nombre_1_verde">8. Geometría</span>
  </div></li>
 <li>
  <div class="folder"
       id="9."
       nivel="1"
       imagen="Imagenes/4AESO/libro9.png"
       imagen2="Imagenes/4AESO/libro9_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.9 Estadistica.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'9.')">

    <img  class="manImg" src="Imagenes/4AESO/libro9.png">
    <span style="display: none;">9.</span>
    <span class="Arbol_Nombre_1_naranja">9. Estadística</span>
  </div></li>
 <li>
  <div class="folder"
       id="10."
       nivel="1"
       imagen="Imagenes/4AESO/libro9.png"
       imagen2="Imagenes/4AESO/libro9_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4A.10 Probabilidad.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'10.')">

    <img  class="manImg" src="Imagenes/4AESO/libro9.png">
    <span style="display: none;">10.</span>
    <span class="Arbol_Nombre_1_naranja">10. Probabilidad</span>
  </div></li></ul>`; 
    const Arbol = document.getElementById('Arbol'); 
    
    if (Arbol) {
        Arbol.innerHTML = ArbolHTML;
        console.log("Árbol insertado con éxito.");
    } else {
        console.error("No se encontró un elemento con ID 'Arbol'");
    }

     // AUTOMATIZACIÓN: Seleccionar nodo de la URL tras renderizar
    const urlParams = new URLSearchParams(window.location.search);
    const NodoSel = urlParams.get('NodoSel') || urlParams.get('nodosel');
     if (NodoSel) {
            setTimeout(() => {
                // 1. Cambiar la propiedad/contenido como hacías
                if (typeof cambiarPropiedad === 'function') {
                    cambiarPropiedad(NodoSel);
                }
                
                // 2. Desplegar y seleccionar el nodo en el árbol
                seleccionarYDesplegarNodo(NodoSel);

            }, 150); // Un pequeño retardo para asegurar que el DOM del árbol esté listo
        }

  }

  // Lógica de ejecución automática al cargar el DOM
  if (document.readyState === 'loading') { 
    document.addEventListener('DOMContentLoaded', insertarArbol);
  } else { 
    insertarArbol();
  } 