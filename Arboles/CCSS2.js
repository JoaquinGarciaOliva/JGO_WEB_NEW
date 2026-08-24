
 /** * Script generado para inserción de árbol */

  function insertarArbol() { 
    const ArbolHTML = `<ul>
 <li>
  <div class="folder"
       id="1."
       nivel="1"
       imagen="Imagenes/CCSS2/libro5.png"
       imagen2="Imagenes/CCSS2/libro5_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/CCSS2.01 Matrices.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.')">

    <img  class="manImg" src="Imagenes/CCSS2/libro5.png">
    <span style="display: none;">1.</span>
    <span class="Arbol_Nombre_1">1. Matrices</span>
  </div></li>
 <li>
  <div class="folder"
       id="2."
       nivel="1"
       imagen="Imagenes/CCSS2/libro6.png"
       imagen2="Imagenes/CCSS2/libro6_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/CCSS2.02 Determinantes.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'2.')">

    <img  class="manImg" src="Imagenes/CCSS2/libro6.png">
    <span style="display: none;">2.</span>
    <span class="Arbol_Nombre_1">2. Determinantes</span>
  </div></li>
 <li>
  <div class="folder"
       id="3."
       nivel="1"
       imagen="Imagenes/CCSS2/libro1.png"
       imagen2="Imagenes/CCSS2/libro1_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/CCSS2.03 Limites_Continuidad.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'3.')">

    <img  class="manImg" src="Imagenes/CCSS2/libro1.png">
    <span style="display: none;">3.</span>
    <span class="Arbol_Nombre_2">3. Límites y Continuidad de Funciones</span>
  </div></li>
 <li>
  <div class="folder"
       id="4."
       nivel="1"
       imagen="Imagenes/CCSS2/libro2.png"
       imagen2="Imagenes/CCSS2/libro2_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/CCSS2.04 Derivadas.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'4.')">

    <img  class="manImg" src="Imagenes/CCSS2/libro2.png">
    <span style="display: none;">4.</span>
    <span class="Arbol_Nombre_2">4. Derivadas</span>
  </div></li>
 <li>
  <div class="folder"
       id="5."
       nivel="1"
       imagen="Imagenes/CCSS2/libro1.png"
       imagen2="Imagenes/CCSS2/libro1_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/CCSS2.05 Integrales.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'5.')">

    <img  class="manImg" src="Imagenes/CCSS2/libro1.png">
    <span style="display: none;">5.</span>
    <span class="Arbol_Nombre_2">5. Integrales</span>
  </div></li>
 <li>
  <div class="folder"
       id="6."
       nivel="1"
       imagen="Imagenes/CCSS2/libro9.png"
       imagen2="Imagenes/CCSS2/libro9_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/CCSS2.06  Estadistica_Inferencia.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'6.')">

    <img  class="manImg" src="Imagenes/CCSS2/libro9.png">
    <span style="display: none;">6.</span>
    <span class="Arbol_Nombre_1_naranja">6. Estadística</span>
  </div></li>
 <li>
  <div class="folder"
       id="7."
       nivel="1"
       imagen="Imagenes/CCSS2/libro10.png"
       imagen2="Imagenes/CCSS2/libro10_open.png"
       Tipo=""
       Youtube=""
       teoria="Temario/Indices/CCSS2.07 Probabilidad.html"
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'7.')">

    <img  class="manImg" src="Imagenes/CCSS2/libro10.png">
    <span style="display: none;">7.</span>
    <span class="Arbol_Nombre_1_naranja">7. Probabilidad</span>
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