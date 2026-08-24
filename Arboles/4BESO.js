
 /** * Script generado para inserción de árbol */

  function insertarArbol() { 
    const ArbolHTML = `<ul>
 <li>
  <div class="folder"
       id="1."
       nivel="1"
       imagen="Imagenes/4BESO/libro1.png"
       imagen2="Imagenes/4BESO/libro1_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.01 NumerosReales.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.')">

    <img  class="manImg" src="Imagenes/4BESO/libro1.png">
    <span style="display: none;">1.</span>
    <span class="Arbol_Nombre_2">1. Números Reales</span>
  </div></li>
 <li>
  <div class="folder"
       id="2."
       nivel="1"
       imagen="Imagenes/4BESO/libro5.png"
       imagen2="Imagenes/4BESO/libro5_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.02 Algebra.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'2.')">

    <img  class="manImg" src="Imagenes/4BESO/libro5.png">
    <span style="display: none;">2.</span>
    <span class="Arbol_Nombre_1">2. Polinomios</span>
  </div></li>
 <li>
  <div class="folder"
       id="3."
       nivel="1"
       imagen="Imagenes/4BESO/libro6.png"
       imagen2="Imagenes/4BESO/libro6_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.03 Ecuaciones_Inecuaciones.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'3.')">

    <img  class="manImg" src="Imagenes/4BESO/libro6.png">
    <span style="display: none;">3.</span>
    <span class="Arbol_Nombre_1">3. Ecuaciones e Inecuaciones</span>
  </div></li>
 <li>
  <div class="folder"
       id="4."
       nivel="1"
       imagen="Imagenes/4BESO/libro5.png"
       imagen2="Imagenes/4BESO/libro5_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.04 Sistemas_Ecuaciones.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'4.')">

    <img  class="manImg" src="Imagenes/4BESO/libro5.png">
    <span style="display: none;">4.</span>
    <span class="Arbol_Nombre_1">4. Sistemas de Ecuaciones</span>
  </div></li>
 <li>
  <div class="folder"
       id="5."
       nivel="1"
       imagen="Imagenes/4BESO/libro1.png"
       imagen2="Imagenes/4BESO/libro1_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.05 Funciones.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'5.')">

    <img  class="manImg" src="Imagenes/4BESO/libro1.png">
    <span style="display: none;">5.</span>
    <span class="Arbol_Nombre_2">5. Funciones</span>
  </div></li>
 <li>
  <div class="folder"
       id="6."
       nivel="1"
       imagen="Imagenes/4BESO/libro3.png"
       imagen2="Imagenes/4BESO/libro3_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.06 Trigonometria.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'6.')">

    <img  class="manImg" src="Imagenes/4BESO/libro3.png">
    <span style="display: none;">6.</span>
    <span class="Arbol_Nombre_1_verde">6. Trigonometría</span>
  </div></li>
 <li>
  <div class="folder"
       id="7."
       nivel="1"
       imagen="Imagenes/4BESO/libro4.png"
       imagen2="Imagenes/4BESO/libro4_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.07 Vectores.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'7.')">

    <img  class="manImg" src="Imagenes/4BESO/libro4.png">
    <span style="display: none;">7.</span>
    <span class="Arbol_Nombre_1_verde">7. Geometría Analítica: Vectores</span>
  </div></li>
 <li>
  <div class="folder"
       id="8."
       nivel="1"
       imagen="Imagenes/4BESO/libro3.png"
       imagen2="Imagenes/4BESO/libro3_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.08 Lineas Rectas.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'8.')">

    <img  class="manImg" src="Imagenes/4BESO/libro3.png">
    <span style="display: none;">8.</span>
    <span class="Arbol_Nombre_1_verde">8. Geometría Analítica: Líneas Rectas</span>
  </div></li>
 <li>
  <div class="folder"
       id="9."
       nivel="1"
       imagen="Imagenes/4BESO/libro9.png"
       imagen2="Imagenes/4BESO/libro9_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.09 Estadistica.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'9.')">

    <img  class="manImg" src="Imagenes/4BESO/libro9.png">
    <span style="display: none;">9.</span>
    <span class="Arbol_Nombre_1_naranja">9. Estadística Descriptiva</span>
  </div></li>
 <li>
  <div class="folder"
       id="10."
       nivel="1"
       imagen="Imagenes/4BESO/libro9.png"
       imagen2="Imagenes/4BESO/libro9_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/4B.10 Probabilidad.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'10.')">

    <img  class="manImg" src="Imagenes/4BESO/libro9.png">
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