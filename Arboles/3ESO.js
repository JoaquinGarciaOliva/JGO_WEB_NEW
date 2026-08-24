
 /** * Script generado para inserción de árbol */

  function insertarArbol() { 
    const ArbolHTML = `<ul>
 <li>
  <div class="folder"
       id="1."
       nivel="1"
       imagen="Imagenes/3ESO/libro1.png"
       imagen2="Imagenes/3ESO/libro1_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.01 Numeros_Racionales.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.')">

    <img  class="manImg" src="Imagenes/3ESO/libro1.png">
    <span style="display: none;">1.</span>
    <span class="Arbol_Nombre_2">1. Números Racionales.</span>
  </div></li>
 <li>
  <div class="folder"
       id="2."
       nivel="1"
       imagen="Imagenes/3ESO/libro2.png"
       imagen2="Imagenes/3ESO/libro2_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.02 Potencias_Radicales.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'2.')">

    <img  class="manImg" src="Imagenes/3ESO/libro2.png">
    <span style="display: none;">2.</span>
    <span class="Arbol_Nombre_2">2. Potencias y Raices</span>
  </div></li>
 <li>
  <div class="folder"
       id="3."
       nivel="1"
       imagen="Imagenes/3ESO/libro5.png"
       imagen2="Imagenes/3ESO/libro5_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.03 Algebra.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'3.')">

    <img  class="manImg" src="Imagenes/3ESO/libro5.png">
    <span style="display: none;">3.</span>
    <span class="Arbol_Nombre_1">3. Polinomios</span>
  </div></li>
 <li>
  <div class="folder"
       id="4."
       nivel="1"
       imagen="Imagenes/3ESO/libro6.png"
       imagen2="Imagenes/3ESO/libro6_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.04 Ecuaciones.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'4.')">

    <img  class="manImg" src="Imagenes/3ESO/libro6.png">
    <span style="display: none;">4.</span>
    <span class="Arbol_Nombre_1">4. Ecuaciones</span>
  </div></li>
 <li>
  <div class="folder"
       id="5."
       nivel="1"
       imagen="Imagenes/3ESO/libro5.png"
       imagen2="Imagenes/3ESO/libro5_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.05 Sistemas Ecuaciones.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'5.')">

    <img  class="manImg" src="Imagenes/3ESO/libro5.png">
    <span style="display: none;">5.</span>
    <span class="Arbol_Nombre_1">5. Sistemas de Ecuaciones</span>
  </div></li>
 <li>
  <div class="folder"
       id="6."
       nivel="1"
       imagen="Imagenes/3ESO/libro1.png"
       imagen2="Imagenes/3ESO/libro1_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.06 Funciones.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'6.')">

    <img  class="manImg" src="Imagenes/3ESO/libro1.png">
    <span style="display: none;">6.</span>
    <span class="Arbol_Nombre_2">6. Funciones. Lineal y Cuadrática.</span>
  </div></li>
 <li>
  <div class="folder"
       id="7."
       nivel="1"
       imagen="Imagenes/3ESO/libro3.png"
       imagen2="Imagenes/3ESO/libro3_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.07 Geometría.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'7.')">

    <img  class="manImg" src="Imagenes/3ESO/libro3.png">
    <span style="display: none;">7.</span>
    <span class="Arbol_Nombre_1_verde">7. Cuerpos Geométricos</span>
  </div></li>
 <li>
  <div class="folder"
       id="8."
       nivel="1"
       imagen="Imagenes/3ESO/libro3.png"
       imagen2="Imagenes/3ESO/libro3_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.08 Semejanza.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'8.')">

    <img  class="manImg" src="Imagenes/3ESO/libro3.png">
    <span style="display: none;">8.</span>
    <span class="Arbol_Nombre_1_verde">8. Semejanza</span>
  </div></li>
 <li>
  <div class="folder"
       id="9."
       nivel="1"
       imagen="Imagenes/3ESO/libro9.png"
       imagen2="Imagenes/3ESO/libro9_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.09 Estadistica.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'9.')">

    <img  class="manImg" src="Imagenes/3ESO/libro9.png">
    <span style="display: none;">9.</span>
    <span class="Arbol_Nombre_1_naranja">9. Estadística</span>
  </div></li>
 <li>
  <div class="folder"
       id="10."
       nivel="1"
       imagen="Imagenes/3ESO/libro9.png"
       imagen2="Imagenes/3ESO/libro9_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/3.10 Probabilidad.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'10.')">

    <img  class="manImg" src="Imagenes/3ESO/libro9.png">
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