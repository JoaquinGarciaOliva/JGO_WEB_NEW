
 /** * Script generado para inserción de árbol */

  function insertarArbol() { 
    const ArbolHTML = `<ul>
 <li>
  <div class="folder"
       id="1."
       nivel="1"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.1.2.1.Naturales_Suma_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.1.2.1.Naturales_Suma_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.1.2.1.Naturales_Suma_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.1.2.1.Naturales_Suma_Ejercicios.html"
       interactivo="Temario/Interactivos/1.1.2.1.Naturales_Suma/3_sumandos/suma3_aprender.html"
       onclick="toggleVisibility2(this,'1.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.</span>
    <span class="Arbol_Nombre_1">Suma</span>
  </div></li>
 <li>
  <div class="folder"
       id="2."
       nivel="1"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.1.2.2.Naturales_Resta_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.1.2.2.Naturales_Resta_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.1.2.2.Naturales_Resta_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.1.2.2.Naturales_Resta_Ejercicios.html"
       interactivo=""
       onclick="toggleVisibility2(this,'2.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">2.</span>
    <span class="Arbol_Nombre_2">Resta. Prueba de la resta.</span>
  </div></li>
 <li>
  <div class="folder"
       id="3."
       nivel="1"
       imagen="Imagenes/arbol/capitulo12.png"
       imagen2="Imagenes/arbol/capitulo12_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo12.png">
    <span style="display: none;">3.</span>
    <span class="Arbol_Nombre_2">Multiplicación.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.1"
       nivel="2"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.1.2.3.1.Naturales_Multiplicar_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.1.2.3.1.Naturales_Multiplicar_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.1.2.3.1.Naturales_Multiplicar_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.1.2.3.1.Naturales_Multiplicar_Ejercicios.html"
       interactivo=""
       onclick="toggleVisibility2(this,'3.1')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">3.1</span>
    <span class="Arbol_Nombre_2">Genérica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2"
       nivel="2"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'3.2')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">3.2</span>
    <span class="Arbol_Nombre_2">En línea.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.3."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.3.</span>
    <span class="Arbol_Nombre_2">Por Potencias de 10.</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="4."
       nivel="1"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.</span>
    <span class="Arbol_Nombre_2">División. Prueba de la división.</span>
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