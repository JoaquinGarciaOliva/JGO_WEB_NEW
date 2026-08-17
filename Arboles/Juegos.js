
 /** * Script generado para inserción de árbol */

  function insertarArbol() { 
    const ArbolHTML = `<ul>
 <li>
  <div class="folder"
       id="1."
       nivel="1"
       imagen="Imagenes/Juegos/carpeta.png"
       imagen2="Imagenes/Juegos/carpeta_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.')">

    <img  class="manImg" src="Imagenes/Juegos/carpeta.png">
    <span style="display: none;">1.</span>
    <span class="Arbol_Nombre_2">Cartas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.1."
       nivel="2"
       imagen="Imagenes/Juegos/hoja_verdeoscuro.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Juegos/01_Cartas/01.1_SUMA/01.1.01_suma_clase_ok/N_Suma_1Digito_Clase.html"
       teoria="Temario/Juegos/01_Cartas/01.1_SUMA/01.1.02_suma_practicar_ok/N_Suma_1Digito_Alumno.html"
       ejemplos="Temario/Juegos/01_Cartas/01.1_SUMA/01.1.03_suma _competicion_ok/N_Suma_1Digito_2Jugadores.html"
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.1.')">

    <img  class="manImg" src="Imagenes/Juegos/hoja_verdeoscuro.png">
    <span style="display: none;">1.1.</span>
    <span class="Arbol_Nombre_2">Suma 1</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.2."
       nivel="2"
       imagen="Imagenes/Juegos/hoja_blue.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Juegos/01_Cartas/02.1_RESTA/02.1.01_resta_clase_ok/N_Resta_1Digito_Clase.html"
       teoria="Temario/Juegos/01_Cartas/02.1_RESTA/02.1.02_resta _practicar_ok/N_Resta_1Digito_Alumno.html"
       ejemplos="Temario/Juegos/01_Cartas/02.1_RESTA/02.1.03_resta_competicion_ok/N_Resta_1Digito_2Jugadores.html"
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.2.')">

    <img  class="manImg" src="Imagenes/Juegos/hoja_blue.png">
    <span style="display: none;">1.2.</span>
    <span class="Arbol_Nombre_2">Resta 1</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.3."
       nivel="2"
       imagen="Imagenes/Juegos/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Juegos/01_Cartas/02.2_RESTA/02.2.01_resta_clase_ok/N_Resta_nivel2_Clase.html"
       teoria="Temario/Juegos/01_Cartas/02.2_RESTA/02.2.02_resta_practicar_ok/N_Resta_nivel2_Alumno.html"
       ejemplos="Temario/Juegos/01_Cartas/02.2_RESTA/02.2.03_resta_competicion_ok/N_Resta_nivel2_2Jugadores.html"
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.3.')">

    <img  class="manImg" src="Imagenes/Juegos/hoja.png">
    <span style="display: none;">1.3.</span>
    <span class="Arbol_Nombre_2">Resta 2</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.4."
       nivel="2"
       imagen="Imagenes/Juegos/hoja_yellow.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Juegos/01_Cartas/03.1_MULTIPLICAR/03.1.01_Tablas Clase_ok/N_Tablas_Clase.html"
       teoria="Temario/Juegos/01_Cartas/03.1_MULTIPLICAR/03.1.02_Tablas practicar_ok/N_Tablas_Alumno.html"
       ejemplos="Temario/Juegos/01_Cartas/03.1_MULTIPLICAR/03.1.03_Tablas competicion_ok/N_Tablas_2Jugadores.html"
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.4.')">

    <img  class="manImg" src="Imagenes/Juegos/hoja_yellow.png">
    <span style="display: none;">1.4.</span>
    <span class="Arbol_Nombre_2">Tablas Multiplicar</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.5."
       nivel="2"
       imagen="Imagenes/Juegos/hoja_verde.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Juegos/01_Cartas/04.1_DIVIDIR/04.1.01_dividir_clase_ok/N_Dividir_1Digito_Clase.html"
       teoria="Temario/Juegos/01_Cartas/04.1_DIVIDIR/04.1.02_dividir _practicar_ok/N_Dividir_1Digito_Alumno.html"
       ejemplos="Temario/Juegos/01_Cartas/04.1_DIVIDIR/04.1.03_dividir_competicion_ok/N_Dividir_1Digito_2Jugadores.html"
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.5.')">

    <img  class="manImg" src="Imagenes/Juegos/hoja_verde.png">
    <span style="display: none;">1.5.</span>
    <span class="Arbol_Nombre_2">Divisiones </span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.6."
       nivel="2"
       imagen="Imagenes/Juegos/hoja_red.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Juegos/01_Cartas/05.1_OPERACIONES/05.1.01_operar_clase_ok_2/N_Operar_1Digito_Clase.html"
       teoria="Temario/Juegos/01_Cartas/05.1_OPERACIONES/05.1.02_operar_practicar_ok/N_Operar_Alumno.html"
       ejemplos="Temario/Juegos/01_Cartas/05.1_OPERACIONES/05.1.03_operar competicion_ok/N_Operar_2Jugadores.html"
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'1.6.')">

    <img  class="manImg" src="Imagenes/Juegos/hoja_red.png">
    <span style="display: none;">1.6.</span>
    <span class="Arbol_Nombre_2">Operaciones Mezcladas</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="2."
       nivel="1"
       imagen="Imagenes/Juegos/hoja_yellow.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Juegos/02_Bingo/Bingo_Matematico.html"
       teoria=""
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'2.')">

    <img  class="manImg" src="Imagenes/Juegos/hoja_yellow.png">
    <span style="display: none;">2.</span>
    <span class="Arbol_Nombre_2">Bingo Matemático</span>
  </div></li>
 <li>
  <div class="folder"
       id="3."
       nivel="1"
       imagen="Imagenes/Juegos/hoja_verdeoscuro.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Juegos/03_Petanca/Petanca.html"
       teoria=""
       ejemplos=""
       ejercicios=""
       interactivo=""
       onclick="toggleVisibility2(this,'3.')">

    <img  class="manImg" src="Imagenes/Juegos/hoja_verdeoscuro.png">
    <span style="display: none;">3.</span>
    <span class="Arbol_Nombre_2">Petanca Matemática</span>
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