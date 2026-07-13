
 /** * Script generado para inserción de árbol */

  function insertarArbol() { 
    const ArbolHTML = `<ul>
 <li>
  <div class="folder"
       id="1."
       nivel="1"
       imagen="Imagenes/arbol/libro1.png"
       imagen2="Imagenes/arbol/libro1_open.png"
       Tipo=""
       Youtube="https://www.elpais.com"
       teoria="https://www.google.com"
       ejemplos="https://www.elmundo.es"
       ejercicios="https://www.iesruizdealda.com"
       onclick="toggleVisibility2(this,'1.')">

    <img  class="manImg" src="Imagenes/arbol/libro1.png">
    <span style="display: none;">1.</span>
    <span class="Arbol_Nombre_1_blue">Números Naturales</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">1.1.</span>
    <span class="Arbol_Nombre_2">Definición.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.1.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.1.1.</span>
    <span class="Arbol_Nombre_3">Leer y Escribir los números naturales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">1.1.2.</span>
    <span class="Arbol_Nombre_3">Operaciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.1.2.1."
       nivel="4"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.1.2.1.Naturales_Suma_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.1.2.1.Naturales_Suma_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.1.2.1.Naturales_Suma_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.1.2.1.Naturales_Suma_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.1.2.1.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.1.2.1.</span>
    <span class="Arbol_Nombre_4">Suma</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.1.2.2."
       nivel="4"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.1.2.2.Naturales_Resta_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.1.2.2.Naturales_Resta_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.1.2.2.Naturales_Resta_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.1.2.2.Naturales_Resta_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.1.2.2.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.1.2.2.</span>
    <span class="Arbol_Nombre_4">Resta. Prueba de la resta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.1.2.3."
       nivel="4"
       imagen="Imagenes/arbol/capitulo12.png"
       imagen2="Imagenes/arbol/capitulo12_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo12.png">
    <span style="display: none;">1.1.2.3.</span>
    <span class="Arbol_Nombre_4">Multiplicación.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.1.2.3.1."
       nivel="5"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.1.2.3.1.Naturales_Multiplicar_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.1.2.3.1.Naturales_Multiplicar_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.1.2.3.1.Naturales_Multiplicar_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.1.2.3.1.Naturales_Multiplicar_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.1.2.3.1.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.1.2.3.1.</span>
    <span class="Arbol_Nombre_5">Genérica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.1.2.3.2."
       nivel="5"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.2.3.2.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.1.2.3.2.</span>
    <span class="Arbol_Nombre_5">En línea.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.1.2.3.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.2.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.1.2.3.3.</span>
    <span class="Arbol_Nombre_5">Por Potencias de 10.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="1.1.2.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.1.2.4.</span>
    <span class="Arbol_Nombre_4">División. Prueba de la división.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.1.2.5."
       nivel="4"
       imagen="Imagenes/arbol/subapartado2.png"
       imagen2="Imagenes/arbol/subapartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado2.png">
    <span style="display: none;">1.1.2.5.</span>
    <span class="Arbol_Nombre_4">Potencias</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.1.2.5.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.2.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.1.2.5.1.</span>
    <span class="Arbol_Nombre_5">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.1.2.5.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.2.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.1.2.5.2.</span>
    <span class="Arbol_Nombre_5">Propiedades.  Misma Base, Distinta Base.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="1.1.3."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.1.3.</span>
    <span class="Arbol_Nombre_3">Operaciones Combinadas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.1.4."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.1.4.</span>
    <span class="Arbol_Nombre_3">profundización: propiedades y cálculo rápido.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="1.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">1.2.</span>
    <span class="Arbol_Nombre_2">Divisibilidad y Factorización.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.2.1."
       nivel="3"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.2.1.0.Multiplos_Divisores_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.2.1.0.Multiplos_Divisores_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.2.1.0.Multiplos_Divisores_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.2.1.0.Multiplos_Divisores_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.2.1.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.2.1.</span>
    <span class="Arbol_Nombre_3">Múltiplos y Divisores de un Número.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.2.2."
       nivel="3"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.2.2.0.Primos_Compuestos_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.2.2.0.Primos_Compuestos_teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.2.2.0.Primos_Compuestos_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.2.2.0.Primos_Compuestos_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.2.2.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.2.2.</span>
    <span class="Arbol_Nombre_3">Primo y compuesto.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.2.3."
       nivel="3"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.2.3.0.Criba_De_Eratostenes_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.2.3.0.Criba_De_Eratostenes_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.2.3.0.Criba_De_Eratostenes_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.2.3.0.Criba_De_Eratostenes_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.2.3.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.2.3.</span>
    <span class="Arbol_Nombre_3">Criba de Eratóstenes.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">1.2.4.</span>
    <span class="Arbol_Nombre_3">Criterios de divisibilidad.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.2.4.1."
       nivel="4"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.2.4.1.Criterios_235_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.2.4.1.Criterios_235_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.2.4.1.Criterios_235_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.2.4.1.Criterios_235_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.2.4.1.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.2.4.1.</span>
    <span class="Arbol_Nombre_4">Criterios divisibilidad del 2, 3, 5.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.2.4.2."
       nivel="4"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.2.4.2.Criterios_4911_teoria_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.2.4.2.Criterios_4911_teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.2.4.2.Criterios_4911_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.2.4.2.Criterios_4911_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.2.4.2.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.2.4.2.</span>
    <span class="Arbol_Nombre_4">Otros Criterios divisibilidad del  11, 4, 9.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.2.4.3."
       nivel="4"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.2.4.3.Criterios_61015_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.2.4.3.Criterios_61015_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.2.4.3.Criterios_61015_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.2.4.3.Criterios_61015_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.2.4.3.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.2.4.3.</span>
    <span class="Arbol_Nombre_4">Criterios divisilidad compuestos: 6, 10, 15.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="1.2.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">1.2.5.</span>
    <span class="Arbol_Nombre_3">Descomponer un número en factores Primos.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.2.5.1."
       nivel="4"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.2.5.1.Factorizar_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.2.5.1.Factorizar_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.2.5.1.Factorizar_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.2.5.1.Factorizar_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.2.5.1.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.2.5.1.</span>
    <span class="Arbol_Nombre_4">Método General.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.2.5.2."
       nivel="4"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.2.5.2.Factorizar_Tablas_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.2.5.2.Factorizar_Tablas_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.2.5.2.Factorizar_Tablas_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.2.5.2.Factorizar_Tablas_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.2.5.2.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.2.5.2.</span>
    <span class="Arbol_Nombre_4">Método de factorizar con las tablas de multiplicar.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="1.3."
       nivel="2"
       imagen="Imagenes/JGO_Mat/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.3.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/capitulo4.png">
    <span style="display: none;">1.3.</span>
    <span class="Arbol_Nombre_2">Mímimo Común Múltiplo y Máximo Común Divisor.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">1.3.1.</span>
    <span class="Arbol_Nombre_3">Mínimo Común Múltiplo.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.3.1.1."
       nivel="4"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.3.1.1.MCM_definicion_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.3.1.1.MCM_definicion_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.3.1.1.MCM_definicion_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.3.1.1.MCM_definicion_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.3.1.1.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.3.1.1.</span>
    <span class="Arbol_Nombre_4">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.3.1.2."
       nivel="4"
       imagen="Imagenes/JGO_Mat/hoja_green.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube="Temario/Matematicas/Pagina_video.html?videoId=01_Números Naturales/1.3.1.2.MCM_Calculo_Video.mp4"
       teoria="Temario/Matematicas/01_Números Naturales/1.3.1.2.MCM_Calculo_Teoria.html"
       ejemplos="Temario/Matematicas/01_Números Naturales/1.3.1.2.MCM_Calculo_Ejemplos.html"
       ejercicios="Temario/Matematicas/01_Números Naturales/1.3.1.2.MCM_Calculo_Ejercicios.html"
       onclick="toggleVisibility2(this,'1.3.1.2.')">

    <img  class="manImg" src="Imagenes/JGO_Mat/hoja_green.png">
    <span style="display: none;">1.3.1.2.</span>
    <span class="Arbol_Nombre_4">Cálculo.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="1.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">1.3.2.</span>
    <span class="Arbol_Nombre_3">Máximo Común Divisor.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.3.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.3.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.3.2.1.</span>
    <span class="Arbol_Nombre_4">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.3.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.3.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.3.2.2.</span>
    <span class="Arbol_Nombre_4">Cálculo.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.3.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.3.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.3.2.3.</span>
    <span class="Arbol_Nombre_4">Método Euclides</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="1.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">1.4.</span>
    <span class="Arbol_Nombre_2">Problemas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="1.4.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.4.1.</span>
    <span class="Arbol_Nombre_3">Pasos a Seguir.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.4.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.4.2.</span>
    <span class="Arbol_Nombre_3">Problemas del M.C.M.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="1.4.3."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'1.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">1.4.3.</span>
    <span class="Arbol_Nombre_3">Problemas del M.C.D.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="2."
       nivel="1"
       imagen="Imagenes/arbol/libro2.png"
       imagen2="Imagenes/arbol/libro2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.')">

    <img  class="manImg" src="Imagenes/arbol/libro2.png">
    <span style="display: none;">2.</span>
    <span class="Arbol_Nombre_1_blue">Números Enteros</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="2.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">2.1.</span>
    <span class="Arbol_Nombre_2">Definición</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="2.1.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.1.1.</span>
    <span class="Arbol_Nombre_3">Z conjunto de los números enteros.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="2.1.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.1.2.</span>
    <span class="Arbol_Nombre_3">Orden. Representación Gráfica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="2.1.3."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.1.3.</span>
    <span class="Arbol_Nombre_3">Valor Absoluto.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="2.1.4."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.1.4.</span>
    <span class="Arbol_Nombre_3">Opuesto.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="2.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">2.2.</span>
    <span class="Arbol_Nombre_2">Operaciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="2.2.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.2.1.</span>
    <span class="Arbol_Nombre_3">Suma y Resta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="2.2.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.2.2.</span>
    <span class="Arbol_Nombre_3">Multiplicación y División.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="2.2.3."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.2.3.</span>
    <span class="Arbol_Nombre_3">Mulitplicaciones Encadenadas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="2.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">2.2.4.</span>
    <span class="Arbol_Nombre_3">Operaciones combinadas.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="2.2.4.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.2.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.2.4.1.</span>
    <span class="Arbol_Nombre_4">Orden de las operaciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="2.2.4.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.2.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.2.4.2.</span>
    <span class="Arbol_Nombre_4">Propiedad Distributiva.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="2.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">2.3.</span>
    <span class="Arbol_Nombre_2">Potencias y Raíces.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="2.3.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.3.1.</span>
    <span class="Arbol_Nombre_3">Definición de potencia.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="2.3.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.3.2.</span>
    <span class="Arbol_Nombre_3">Propiedades de Potencias.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="2.3.3."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'2.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">2.3.3.</span>
    <span class="Arbol_Nombre_3">Definición de Raíz.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="3."
       nivel="1"
       imagen="Imagenes/arbol/libro3.png"
       imagen2="Imagenes/arbol/libro3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.')">

    <img  class="manImg" src="Imagenes/arbol/libro3.png">
    <span style="display: none;">3.</span>
    <span class="Arbol_Nombre_1_blue">Números Racionales</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">3.1.</span>
    <span class="Arbol_Nombre_2">Números Racionales. Fracciones.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">3.1.1.</span>
    <span class="Arbol_Nombre_3">Definición. Significado y Representación Gráfica.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.1.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.1.1.</span>
    <span class="Arbol_Nombre_4">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.1.2.</span>
    <span class="Arbol_Nombre_4">Significado.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.1.3.</span>
    <span class="Arbol_Nombre_4">Representación Gráfica.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">3.1.2.</span>
    <span class="Arbol_Nombre_3">Fracciones Equivalentes</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.1.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.2.1.</span>
    <span class="Arbol_Nombre_4">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.2.2.</span>
    <span class="Arbol_Nombre_4">Comprobar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.2.3.</span>
    <span class="Arbol_Nombre_4">Crear.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.2.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.2.4.</span>
    <span class="Arbol_Nombre_4">Simplificar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.2.5."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.2.5.</span>
    <span class="Arbol_Nombre_4">Mismo Denominador. Ordenar.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">3.1.3.</span>
    <span class="Arbol_Nombre_3">Operaciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.1.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.3.1.</span>
    <span class="Arbol_Nombre_4">Suma y Resta</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.3.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.3.2.</span>
    <span class="Arbol_Nombre_4">Multiplicar y Dividir</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.3.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.3.3.</span>
    <span class="Arbol_Nombre_4">Operaciones Combinadas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.3.4."
       nivel="4"
       imagen="Imagenes/arbol/subapartado4.png"
       imagen2="Imagenes/arbol/subapartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado4.png">
    <span style="display: none;">3.1.3.4.</span>
    <span class="Arbol_Nombre_4">Potencias</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.1.3.4.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.3.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.3.4.1.</span>
    <span class="Arbol_Nombre_5">Definición</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.3.4.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.3.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.3.4.2.</span>
    <span class="Arbol_Nombre_5">Operaciones</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.1.3.4.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.3.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.3.4.3.</span>
    <span class="Arbol_Nombre_5">Base 10. Notación Científica</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="3.1.4."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.1.4.</span>
    <span class="Arbol_Nombre_3">Fracción como una operación</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">3.2.</span>
    <span class="Arbol_Nombre_2">Números Decimales</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">3.2.1.</span>
    <span class="Arbol_Nombre_3">Definición.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.2.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.1.1.</span>
    <span class="Arbol_Nombre_4">Lectura y Escritura.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.1.2.</span>
    <span class="Arbol_Nombre_4">Tipos</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.1.3.</span>
    <span class="Arbol_Nombre_4">Orden</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.1.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.1.4.</span>
    <span class="Arbol_Nombre_4">Representación Gráfica</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.1.5."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.1.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.1.5.</span>
    <span class="Arbol_Nombre_4">Denso</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.1.6."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.1.6.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.1.6.</span>
    <span class="Arbol_Nombre_4">Redondeo, Truncamiento y Error.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">3.2.2.</span>
    <span class="Arbol_Nombre_3">Operaciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.2.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.2.1.</span>
    <span class="Arbol_Nombre_4">Suma y Resta</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.2.2.</span>
    <span class="Arbol_Nombre_4">Multiplicación</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.2.3."
       nivel="4"
       imagen="Imagenes/arbol/subapartado3.png"
       imagen2="Imagenes/arbol/subapartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado3.png">
    <span style="display: none;">3.2.2.3.</span>
    <span class="Arbol_Nombre_4">División</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.2.2.3.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.2.3.1.</span>
    <span class="Arbol_Nombre_5">Decimales en el dividendo y no en el divisor.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.2.3.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.2.3.2.</span>
    <span class="Arbol_Nombre_5">sin decimales en el dividendo ni en el divisor.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.2.3.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.2.3.3.</span>
    <span class="Arbol_Nombre_5">Decimales en el divisor.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.2.2.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.2.4.</span>
    <span class="Arbol_Nombre_4">Multiplicar y dividir por potencias de 10</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.2.5."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.2.5.</span>
    <span class="Arbol_Nombre_4">Operaciones Combinadas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.2.6."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.2.6.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.2.6.</span>
    <span class="Arbol_Nombre_4">Base 10. Notación Científica</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">3.2.3.</span>
    <span class="Arbol_Nombre_3">Fracciones y Números Decimales</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.2.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.3.1.</span>
    <span class="Arbol_Nombre_4">De fracción a Número Decimal</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.3.2."
       nivel="4"
       imagen="Imagenes/arbol/subapartado2.png"
       imagen2="Imagenes/arbol/subapartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado2.png">
    <span style="display: none;">3.2.3.2.</span>
    <span class="Arbol_Nombre_4">De Número Decimal a Fracción.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.2.3.2.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.3.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.3.2.1.</span>
    <span class="Arbol_Nombre_5">Método 1.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.3.2.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.3.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.3.2.2.</span>
    <span class="Arbol_Nombre_5">Método 2.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.2.3.2.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.2.3.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.2.3.2.3.</span>
    <span class="Arbol_Nombre_5">Aplicaciones: Operaciones con números periódicos</span>
  </div></li></ul></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="3.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">3.3.</span>
    <span class="Arbol_Nombre_2">Unidades de medidas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.3.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.3.1.</span>
    <span class="Arbol_Nombre_3">Unidades de medidas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.3.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.3.2.</span>
    <span class="Arbol_Nombre_3">Unidades cuadráticas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.3.3."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.3.3.</span>
    <span class="Arbol_Nombre_3">Unidades Cúbicas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.3.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">3.3.4.</span>
    <span class="Arbol_Nombre_3">Números sexagesimales</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.3.4.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.3.4.1.</span>
    <span class="Arbol_Nombre_4">El tiempo</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.3.4.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.3.4.2.</span>
    <span class="Arbol_Nombre_4">Los grados</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.3.4.3."
       nivel="4"
       imagen="Imagenes/arbol/subapartado3.png"
       imagen2="Imagenes/arbol/subapartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado3.png">
    <span style="display: none;">3.3.4.3.</span>
    <span class="Arbol_Nombre_4">Operaciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.3.4.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.3.4.3.</span>
    <span class="Arbol_Nombre_5">Suma y Resta</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.3.4.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.3.4.3.</span>
    <span class="Arbol_Nombre_5">Multiplicar por un número entero</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.3.4.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.3.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.3.4.3.</span>
    <span class="Arbol_Nombre_5">Dividir por un número entero.</span>
  </div></li></ul></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="3.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">3.4.</span>
    <span class="Arbol_Nombre_2">Problemas de Fracciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.4.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.4.1.</span>
    <span class="Arbol_Nombre_3">Problema de la Fracción.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.4.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.4.2.</span>
    <span class="Arbol_Nombre_3">Problema de la Parte.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.4.3."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.4.3.</span>
    <span class="Arbol_Nombre_3">Problema del Total.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.4.4."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.4.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.4.4.</span>
    <span class="Arbol_Nombre_3">Problemas mezclados.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.4.5."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.4.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.4.5.</span>
    <span class="Arbol_Nombre_3">Problema de la parte de la parte.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">3.5.</span>
    <span class="Arbol_Nombre_2">Proporcionalidad.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.5.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">3.5.1.</span>
    <span class="Arbol_Nombre_3">Proporcionalidad Directo.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.5.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.5.1.1.</span>
    <span class="Arbol_Nombre_4">Método 1. Básico. Constante Proporcionalidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.5.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.5.1.2.</span>
    <span class="Arbol_Nombre_4">Método 2. Reducción a la unidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.5.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.5.1.3.</span>
    <span class="Arbol_Nombre_4">Método 3. Regla de 3 Directa.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.5.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">3.5.2.</span>
    <span class="Arbol_Nombre_3">Proporcionalidad Inversa.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.5.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.5.2.1.</span>
    <span class="Arbol_Nombre_4">Método 1. Básico. Constante Proporcionalidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.5.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.5.2.2.</span>
    <span class="Arbol_Nombre_4">Método 2. Reducción a la unidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.5.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.5.2.3.</span>
    <span class="Arbol_Nombre_4">Método 3. Regla de 3 Inversa.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.5.3."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.5.3.</span>
    <span class="Arbol_Nombre_3">Proporcionalidad Compuesta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.5.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">3.5.4.</span>
    <span class="Arbol_Nombre_3">Repartos Proporcionales.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.5.4.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.5.4.1.</span>
    <span class="Arbol_Nombre_4">Repartos de proporcionalidad directa.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.5.4.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.5.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.5.4.2.</span>
    <span class="Arbol_Nombre_4">Repartos de propocionalidad inversa.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="3.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">3.6.</span>
    <span class="Arbol_Nombre_2">Porcentajes.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.6.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">3.6.1.</span>
    <span class="Arbol_Nombre_3">Definición.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.6.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.1.1.</span>
    <span class="Arbol_Nombre_4">Fracción</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.6.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.1.2.</span>
    <span class="Arbol_Nombre_4">Decimal</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.6.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.1.3.</span>
    <span class="Arbol_Nombre_4">Regla de 3.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.6.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.2.</span>
    <span class="Arbol_Nombre_3">Cálculos Rápidos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.6.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">3.6.3.</span>
    <span class="Arbol_Nombre_3">Problemas Básicos.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.6.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.3.1.</span>
    <span class="Arbol_Nombre_4">Calculo de la parte.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.6.3.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.3.2.</span>
    <span class="Arbol_Nombre_4">Calculo del tanto por ciento.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.6.3.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.3.3.</span>
    <span class="Arbol_Nombre_4">Calculo del valor inicial.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.6.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">3.6.4.</span>
    <span class="Arbol_Nombre_3">Aumentos y Disminuciones.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="3.6.4.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.4.1.</span>
    <span class="Arbol_Nombre_4">Método 1. Regla de tres.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.6.4.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.4.2.</span>
    <span class="Arbol_Nombre_4">Método 2. Multiplicar por el coeficiente.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="3.6.5."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.5.</span>
    <span class="Arbol_Nombre_3">Problema del precio inicial.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="3.6.6."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'3.6.6.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">3.6.6.</span>
    <span class="Arbol_Nombre_3">Encadenados.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="4."
       nivel="1"
       imagen="Imagenes/arbol/libro4.png"
       imagen2="Imagenes/arbol/libro4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.')">

    <img  class="manImg" src="Imagenes/arbol/libro4.png">
    <span style="display: none;">4.</span>
    <span class="Arbol_Nombre_1_blue">Números Reales</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="4.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">4.1.</span>
    <span class="Arbol_Nombre_2">Números Reales. La recta Real.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="4.1.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.1.1.</span>
    <span class="Arbol_Nombre_3">Definición</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">4.1.2.</span>
    <span class="Arbol_Nombre_3">Intervalos y Semirectas.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="4.1.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.1.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.1.2.1.</span>
    <span class="Arbol_Nombre_4">Definición. Conjunto y Representación Gráfica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.1.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.1.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.1.2.2.</span>
    <span class="Arbol_Nombre_4">Operaciones: Unión e Intersección.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="4.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">4.1.3.</span>
    <span class="Arbol_Nombre_3">Valor Absoluto.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="4.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">4.2.</span>
    <span class="Arbol_Nombre_2">Potencias</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="4.2.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.2.1.</span>
    <span class="Arbol_Nombre_3">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.2.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.2.2.</span>
    <span class="Arbol_Nombre_3">Propiedades.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.2.3."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.2.3.</span>
    <span class="Arbol_Nombre_3">Exponente negativo.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="4.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">4.3.</span>
    <span class="Arbol_Nombre_2">Raíces y Radicales.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="4.3.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.3.1.</span>
    <span class="Arbol_Nombre_3">Definición. Forma Exponencial.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">4.3.2.</span>
    <span class="Arbol_Nombre_3">Operaciones.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="4.3.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.3.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.3.2.1.</span>
    <span class="Arbol_Nombre_4">Extraer e Introducir.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.3.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.3.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.3.2.2.</span>
    <span class="Arbol_Nombre_4">Suma y Resta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.3.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.3.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.3.2.3.</span>
    <span class="Arbol_Nombre_4">Multiplicar y Dividir.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.3.2.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.3.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.3.2.4.</span>
    <span class="Arbol_Nombre_4">Potencias y Raíces de un radical.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.3.2.5."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.3.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.3.2.5.</span>
    <span class="Arbol_Nombre_4">Racionalizar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.3.2.6."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.3.2.6.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.3.2.6.</span>
    <span class="Arbol_Nombre_4">Operaciones combinadas.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="4.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">4.4.</span>
    <span class="Arbol_Nombre_2">Logaritmos.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="4.4.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.4.1.</span>
    <span class="Arbol_Nombre_3">Definición</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="4.4.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'4.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">4.4.2.</span>
    <span class="Arbol_Nombre_3">Propiedades.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="5."
       nivel="1"
       imagen="Imagenes/arbol/libro5.png"
       imagen2="Imagenes/arbol/libro5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.')">

    <img  class="manImg" src="Imagenes/arbol/libro5.png">
    <span style="display: none;">5.</span>
    <span class="Arbol_Nombre_1_blue">Números Complejos</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="5.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">5.1.</span>
    <span class="Arbol_Nombre_2">Forma Binómica</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="5.1.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.1.1.</span>
    <span class="Arbol_Nombre_3">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.1.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.1.2.</span>
    <span class="Arbol_Nombre_3">Representación Gráfica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">5.1.3.</span>
    <span class="Arbol_Nombre_3">Operaciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="5.1.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.1.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.1.3.1.</span>
    <span class="Arbol_Nombre_4">Suma y Resta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.1.3.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.1.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.1.3.2.</span>
    <span class="Arbol_Nombre_4">Potencias de i.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.1.3.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.1.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.1.3.3.</span>
    <span class="Arbol_Nombre_4">Multiplicación.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.1.3.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.1.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.1.3.4.</span>
    <span class="Arbol_Nombre_4">conjugado.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.1.3.5."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.1.3.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.1.3.5.</span>
    <span class="Arbol_Nombre_4">División.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="5.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">5.2.</span>
    <span class="Arbol_Nombre_2">Forma Polar.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="5.2.1."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.2.1.</span>
    <span class="Arbol_Nombre_3">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.2.2."
       nivel="3"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.2.2.</span>
    <span class="Arbol_Nombre_3">Forma Polar y Forma Binómica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">5.2.3.</span>
    <span class="Arbol_Nombre_3">Operaciones.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="5.2.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.2.3.1.</span>
    <span class="Arbol_Nombre_4">Multiplicación.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.2.3.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.2.3.2.</span>
    <span class="Arbol_Nombre_4">División.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.2.3.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.2.3.3.</span>
    <span class="Arbol_Nombre_4">Potencia.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.2.3.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.2.3.4.</span>
    <span class="Arbol_Nombre_4">Fórmula de Moivre.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.2.3.5."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.3.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.2.3.5.</span>
    <span class="Arbol_Nombre_4">Raíces N-ésimas de un número complejo.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="5.2.3.6."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'5.2.3.6.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">5.2.3.6.</span>
    <span class="Arbol_Nombre_4">Ecuación Compleja.</span>
  </div></li></ul></li></ul></li></ul>
 <li>
  <div class="folder"
       id="6."
       nivel="1"
       imagen="Imagenes/arbol/libro6.png"
       imagen2="Imagenes/arbol/libro6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.')">

    <img  class="manImg" src="Imagenes/arbol/libro6.png">
    <span style="display: none;">6.</span>
    <span class="Arbol_Nombre_1">Lenguaje álgebraico</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="6.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">6.1.</span>
    <span class="Arbol_Nombre_2">Lenguaje álgebraico.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">6.2.</span>
    <span class="Arbol_Nombre_2">Monomio.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="6.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">6.2.1.</span>
    <span class="Arbol_Nombre_3">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">6.2.2.</span>
    <span class="Arbol_Nombre_3">Operaciones.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="6.2.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.2.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.2.2.1.</span>
    <span class="Arbol_Nombre_4">Suma y resta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.2.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.2.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.2.2.2.</span>
    <span class="Arbol_Nombre_4">Multiplicar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.2.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.2.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.2.2.3.</span>
    <span class="Arbol_Nombre_4">Dividir.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="6.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">6.3.</span>
    <span class="Arbol_Nombre_2">Polinomios.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="6.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">6.3.1.</span>
    <span class="Arbol_Nombre_3">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">6.3.2.</span>
    <span class="Arbol_Nombre_3">Evaluar un polinomio.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">6.3.3.</span>
    <span class="Arbol_Nombre_3">Operaciones.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="6.3.3.1."
       nivel="4"
       imagen="Imagenes/arbol/subapartado1.png"
       imagen2="Imagenes/arbol/subapartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado1.png">
    <span style="display: none;">6.3.3.1.</span>
    <span class="Arbol_Nombre_4">Suma y resta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.2."
       nivel="4"
       imagen="Imagenes/arbol/subapartado2.png"
       imagen2="Imagenes/arbol/subapartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado2.png">
    <span style="display: none;">6.3.3.2.</span>
    <span class="Arbol_Nombre_4">Multiplicar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.3."
       nivel="4"
       imagen="Imagenes/arbol/subapartado3.png"
       imagen2="Imagenes/arbol/subapartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado3.png">
    <span style="display: none;">6.3.3.3.</span>
    <span class="Arbol_Nombre_4">Igualdades Notables.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="6.3.3.3.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.3.1.</span>
    <span class="Arbol_Nombre_5">$(a+b)^2$</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.3.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.3.2.</span>
    <span class="Arbol_Nombre_5">$(a-b)^2$</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.3.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.3.3.</span>
    <span class="Arbol_Nombre_5">$(a+b)(a-b)$</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.3.4."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.3.4.</span>
    <span class="Arbol_Nombre_5">Fórmulas en ambos sentidos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.4."
       nivel="5"
       imagen="Imagenes/arbol/subapartado4.png"
       imagen2="Imagenes/arbol/subapartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado4.png">
    <span style="display: none;">6.3.3.4.</span>
    <span class="Arbol_Nombre_4">División de polinomios.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="6.3.3.4.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.4.1.</span>
    <span class="Arbol_Nombre_5">División General</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.4.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.4.2.</span>
    <span class="Arbol_Nombre_5">Regla de Ruffini.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.4.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.4.3.</span>
    <span class="Arbol_Nombre_5">Teorema del Resto.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.5."
       nivel="4"
       imagen="Imagenes/arbol/subapartado5.png"
       imagen2="Imagenes/arbol/subapartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.5.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado5.png">
    <span style="display: none;">6.3.3.5.</span>
    <span class="Arbol_Nombre_4">Factorización de un Polinomio.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="6.3.3.5.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.5.1.</span>
    <span class="Arbol_Nombre_5">Raíces de un polinomio.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.5.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.5.2.</span>
    <span class="Arbol_Nombre_5">Polinomios irreducibles.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.3.3.5.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.3.3.5.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.3.3.5.3.</span>
    <span class="Arbol_Nombre_5">Factorizar un polinomio. Ruffini.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="6.4."
       nivel="4"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">6.4.</span>
    <span class="Arbol_Nombre_2">Fracciones algebráicas.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="6.4.1."
       nivel="5"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">6.4.1.</span>
    <span class="Arbol_Nombre_3">Simplificar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.4.2."
       nivel="5"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">6.4.2.</span>
    <span class="Arbol_Nombre_3">Operaciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.4.2.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.4.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.4.2.1.</span>
    <span class="Arbol_Nombre_4">Multiplicar y Dividir</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.4.2.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.4.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.4.2.2.</span>
    <span class="Arbol_Nombre_4">Mismo Denominador</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.4.2.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.4.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.4.2.3.</span>
    <span class="Arbol_Nombre_4">Suma y Resta</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="6.4.2.4."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'6.4.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">6.4.2.4.</span>
    <span class="Arbol_Nombre_4">Operaciones combinadas</span>
  </div></li></ul></li></ul></li></ul></li></ul>
 <li>
  <div class="folder"
       id="7."
       nivel="1"
       imagen="Imagenes/arbol/libro7.png"
       imagen2="Imagenes/arbol/libro7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.')">

    <img  class="manImg" src="Imagenes/arbol/libro7.png">
    <span style="display: none;">7.</span>
    <span class="Arbol_Nombre_1">Ecuaciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="7.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">7.1.</span>
    <span class="Arbol_Nombre_2">Definición.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="7.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">7.1.1.</span>
    <span class="Arbol_Nombre_3">Ecuación - Identidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">7.1.2.</span>
    <span class="Arbol_Nombre_3">Tipos de Ecuaciones por número de soluciones.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="7.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">7.2.</span>
    <span class="Arbol_Nombre_2">Primer Grado</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="7.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">7.2.1.</span>
    <span class="Arbol_Nombre_3">Básicas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">7.2.2.</span>
    <span class="Arbol_Nombre_3">Sencillas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">7.2.3.</span>
    <span class="Arbol_Nombre_3">Con Paréntesis.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">7.2.4.</span>
    <span class="Arbol_Nombre_3">Con Fracciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.2.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">7.2.5.</span>
    <span class="Arbol_Nombre_3">Generales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.2.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.2.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">7.2.6.</span>
    <span class="Arbol_Nombre_3">Porque de las básicas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="7.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">7.3.</span>
    <span class="Arbol_Nombre_2">Segundo Grado.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="7.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">7.3.1.</span>
    <span class="Arbol_Nombre_3">Completa $ax^2+bx+c=0$</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">7.3.2.</span>
    <span class="Arbol_Nombre_3">Incompletas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="7.3.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">7.3.2.1.</span>
    <span class="Arbol_Nombre_4">$ax^2+bx=0$</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.3.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">7.3.2.2.</span>
    <span class="Arbol_Nombre_4">$ax^2+c=0$</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="7.3.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">7.3.3.</span>
    <span class="Arbol_Nombre_3">Generales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.3.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">7.3.4.</span>
    <span class="Arbol_Nombre_3">Discriminante.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.3.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">7.3.5.</span>
    <span class="Arbol_Nombre_3">Factorizar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.3.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">7.3.6.</span>
    <span class="Arbol_Nombre_3">Completar cuadrados.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.3.7."
       nivel="3"
       imagen="Imagenes/arbol/apartado7.png"
       imagen2="Imagenes/arbol/apartado7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.3.7.')">

    <img  class="manImg" src="Imagenes/arbol/apartado7.png">
    <span style="display: none;">7.3.7.</span>
    <span class="Arbol_Nombre_3">Demostración de la fórmula.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="7.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">7.4.</span>
    <span class="Arbol_Nombre_2">Bicuadradas. $ax^4+bx^2+c=0$</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">7.5.</span>
    <span class="Arbol_Nombre_2">Producto igual a 0</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">7.6.</span>
    <span class="Arbol_Nombre_2">Grado n. Ruffini.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.7."
       nivel="2"
       imagen="Imagenes/arbol/capitulo7.png"
       imagen2="Imagenes/arbol/capitulo7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.7.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo7.png">
    <span style="display: none;">7.7.</span>
    <span class="Arbol_Nombre_2">Racionales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.8."
       nivel="2"
       imagen="Imagenes/arbol/capitulo8.png"
       imagen2="Imagenes/arbol/capitulo8_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.8.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo8.png">
    <span style="display: none;">7.8.</span>
    <span class="Arbol_Nombre_2">Con Radicales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.9."
       nivel="2"
       imagen="Imagenes/arbol/capitulo9.png"
       imagen2="Imagenes/arbol/capitulo9_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.9.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo9.png">
    <span style="display: none;">7.9.</span>
    <span class="Arbol_Nombre_2">Exponenciales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.10."
       nivel="2"
       imagen="Imagenes/arbol/capitulo10.png"
       imagen2="Imagenes/arbol/capitulo10_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.10.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo10.png">
    <span style="display: none;">7.10.</span>
    <span class="Arbol_Nombre_2">Logaritmicas.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="7.10.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.10.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">7.10.1.</span>
    <span class="Arbol_Nombre_3">Definición.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="7.10.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.10.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">7.10.1.1.</span>
    <span class="Arbol_Nombre_4">Misma Base. Bases Relacionadas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="7.10.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.10.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">7.10.1.2.</span>
    <span class="Arbol_Nombre_4">Distinta Base.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="7.10.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'7.10.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">7.10.2.</span>
    <span class="Arbol_Nombre_3">Cambio de variable.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="8."
       nivel="1"
       imagen="Imagenes/arbol/libro8.png"
       imagen2="Imagenes/arbol/libro8_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.')">

    <img  class="manImg" src="Imagenes/arbol/libro8.png">
    <span style="display: none;">8.</span>
    <span class="Arbol_Nombre_1">Sistemas de Ecuaciones.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="8.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">8.1.</span>
    <span class="Arbol_Nombre_2">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">8.2.</span>
    <span class="Arbol_Nombre_2">Clasificación por número de soluciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">8.3.</span>
    <span class="Arbol_Nombre_2">Lineales de 2 variables</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="8.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">8.3.1.</span>
    <span class="Arbol_Nombre_3">Método de Sustitución.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">8.3.2.</span>
    <span class="Arbol_Nombre_3">Método de Igualación.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.3.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">8.3.3.</span>
    <span class="Arbol_Nombre_3">Método de Reducción.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.3.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">8.3.4.</span>
    <span class="Arbol_Nombre_3">Generales.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="8.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">8.4.</span>
    <span class="Arbol_Nombre_2">No lineales de 2 variables.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">8.5.</span>
    <span class="Arbol_Nombre_2">Lineales de n variables. Método de Gauss.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.5.1."
       nivel="2"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">8.5.1.</span>
    <span class="Arbol_Nombre_3">Sistemas Escalonados.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.5.2."
       nivel="2"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">8.5.2.</span>
    <span class="Arbol_Nombre_3">Método de Gauss.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.5.3."
       nivel="2"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.5.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">8.5.3.</span>
    <span class="Arbol_Nombre_3">Sistemas - Matrices - Determinantes</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.5.3.1."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.5.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">8.5.3.1.</span>
    <span class="Arbol_Nombre_3">Método de Gauss por Matrices.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.5.3.2."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.5.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">8.5.3.2.</span>
    <span class="Arbol_Nombre_3">Discusión de sistemas.  Teorema de Rouché-Frobenius.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.5.3.3."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.5.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">8.5.3.3.</span>
    <span class="Arbol_Nombre_3">Regla de Cramer.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.5.3.4."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.5.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">8.5.3.4.</span>
    <span class="Arbol_Nombre_3">Discusión por Determinantes.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="8.5.4."
       nivel="2"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'8.5.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">8.5.4.</span>
    <span class="Arbol_Nombre_2">Problemas</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="9."
       nivel="1"
       imagen="Imagenes/arbol/libro9.png"
       imagen2="Imagenes/arbol/libro9_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.')">

    <img  class="manImg" src="Imagenes/arbol/libro9.png">
    <span style="display: none;">9.</span>
    <span class="Arbol_Nombre_1">Inecuaciones.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="9.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">9.1.</span>
    <span class="Arbol_Nombre_2">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="9.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">9.2.</span>
    <span class="Arbol_Nombre_2">polinómica de una variable de grado uno.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="9.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">9.2.1.</span>
    <span class="Arbol_Nombre_3">Método 1.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="9.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">9.2.2.</span>
    <span class="Arbol_Nombre_3">Método 2.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="9.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">9.3.</span>
    <span class="Arbol_Nombre_2">Polinómica de una variable de grado n.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="9.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">9.4.</span>
    <span class="Arbol_Nombre_2">Fracciones polinómicas de una variable.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="9.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">9.5.</span>
    <span class="Arbol_Nombre_2">Sistemas inecuaciones de una variable</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="9.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">9.6.</span>
    <span class="Arbol_Nombre_2">Inecuación lineal de dos variables</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="9.7."
       nivel="2"
       imagen="Imagenes/arbol/capitulo7.png"
       imagen2="Imagenes/arbol/capitulo7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'9.7.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo7.png">
    <span style="display: none;">9.7.</span>
    <span class="Arbol_Nombre_2">sistemas de inecuaciones lineales de dos variables</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="10."
       nivel="1"
       imagen="Imagenes/arbol/libro10.png"
       imagen2="Imagenes/arbol/libro10_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.')">

    <img  class="manImg" src="Imagenes/arbol/libro10.png">
    <span style="display: none;">10.</span>
    <span class="Arbol_Nombre_1">Matrices.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="10.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">10.1.</span>
    <span class="Arbol_Nombre_2">Definiciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">10.2.</span>
    <span class="Arbol_Nombre_2">Operaciones y Propiedades.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.2.1."
       nivel="2"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">10.2.1.</span>
    <span class="Arbol_Nombre_3">Suma.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.2.2."
       nivel="2"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">10.2.2.</span>
    <span class="Arbol_Nombre_3">Producto por un escalar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.2.3."
       nivel="2"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">10.2.3.</span>
    <span class="Arbol_Nombre_3">Producto de matrices.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">10.3.</span>
    <span class="Arbol_Nombre_2">Matrices Cuadradas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.3.1."
       nivel="2"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">10.3.1.</span>
    <span class="Arbol_Nombre_3">Matriz Unidad. Matriz Nula.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.3.2."
       nivel="2"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">10.3.2.</span>
    <span class="Arbol_Nombre_3">Matríz inversa.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.3.3."
       nivel="2"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">10.3.3.</span>
    <span class="Arbol_Nombre_3">Calculo de la Matriz Inversa por Gauss.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">10.4.</span>
    <span class="Arbol_Nombre_2">Rango de una matriz.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">10.5.</span>
    <span class="Arbol_Nombre_2">Discusión de Sistemas por Rangos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">10.6.</span>
    <span class="Arbol_Nombre_2">Ecuaciones Matriciales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="10.7."
       nivel="2"
       imagen="Imagenes/arbol/capitulo7.png"
       imagen2="Imagenes/arbol/capitulo7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'10.7.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo7.png">
    <span style="display: none;">10.7.</span>
    <span class="Arbol_Nombre_2">Ejercicios Teóricos.</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="11."
       nivel="1"
       imagen="Imagenes/arbol/libro11.png"
       imagen2="Imagenes/arbol/libro11_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.')">

    <img  class="manImg" src="Imagenes/arbol/libro11.png">
    <span style="display: none;">11.</span>
    <span class="Arbol_Nombre_1">Determinantes</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="11.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">11.1.</span>
    <span class="Arbol_Nombre_2">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">11.2.</span>
    <span class="Arbol_Nombre_2">Calculo de determinantes</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="11.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">11.2.1.</span>
    <span class="Arbol_Nombre_3">Orden 2</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">11.2.2.</span>
    <span class="Arbol_Nombre_3">Orden 3</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="11.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">11.3.</span>
    <span class="Arbol_Nombre_2">Propiedades determinantes.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">11.4.</span>
    <span class="Arbol_Nombre_2">Calculo de Determinante Orden n.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">11.5.</span>
    <span class="Arbol_Nombre_2">Matriz Adjunta</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="11.5.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">11.5.1.</span>
    <span class="Arbol_Nombre_3">Menor complementario</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.5.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">11.5.2.</span>
    <span class="Arbol_Nombre_3">Adjunto</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="11.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">11.6.</span>
    <span class="Arbol_Nombre_2">Cálculo Práctico de un determinante.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.7."
       nivel="2"
       imagen="Imagenes/arbol/capitulo7.png"
       imagen2="Imagenes/arbol/capitulo7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.7.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo7.png">
    <span style="display: none;">11.7.</span>
    <span class="Arbol_Nombre_2">Rango de una matriz por determinantes.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="11.7.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.7.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">11.7.1.</span>
    <span class="Arbol_Nombre_3">Ascendente.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.7.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.7.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">11.7.2.</span>
    <span class="Arbol_Nombre_3">Descendiente.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="11.8."
       nivel="2"
       imagen="Imagenes/arbol/capitulo8.png"
       imagen2="Imagenes/arbol/capitulo8_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.8.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo8.png">
    <span style="display: none;">11.8.</span>
    <span class="Arbol_Nombre_2">Calculo de la Inversa</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.9."
       nivel="2"
       imagen="Imagenes/arbol/capitulo9.png"
       imagen2="Imagenes/arbol/capitulo9_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.9.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo9.png">
    <span style="display: none;">11.9.</span>
    <span class="Arbol_Nombre_2">Regla de Cramer.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.10."
       nivel="2"
       imagen="Imagenes/arbol/capitulo10.png"
       imagen2="Imagenes/arbol/capitulo10_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.10.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo10.png">
    <span style="display: none;">11.10.</span>
    <span class="Arbol_Nombre_2">Discusión de Sistemas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="11.11."
       nivel="2"
       imagen="Imagenes/arbol/capitulo11.png"
       imagen2="Imagenes/arbol/capitulo11_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'11.11.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo11.png">
    <span style="display: none;">11.11.</span>
    <span class="Arbol_Nombre_2">Ejercicios de Profundización.</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="13."
       nivel="1"
       imagen="Imagenes/arbol/libro12.png"
       imagen2="Imagenes/arbol/libro12_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.')">

    <img  class="manImg" src="Imagenes/arbol/libro12.png">
    <span style="display: none;">13.</span>
    <span class="Arbol_Nombre_1_verde">Geometría Básica</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="13.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">13.1.</span>
    <span class="Arbol_Nombre_2">Definiciones básicas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="13.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">13.1.1.</span>
    <span class="Arbol_Nombre_3">Punto, Línea Recta, Ángulo</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="13.1.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.1.1.1.</span>
    <span class="Arbol_Nombre_4">Líneas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.1.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.1.1.2.</span>
    <span class="Arbol_Nombre_4">Ángulos</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.1.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.1.1.2.</span>
    <span class="Arbol_Nombre_4">Poligonos</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="13.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">13.1.2.</span>
    <span class="Arbol_Nombre_3">Relaciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="13.1.2.1."
       nivel="4"
       imagen="Imagenes/arbol/subapartado1.png"
       imagen2="Imagenes/arbol/subapartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado1.png">
    <span style="display: none;">13.1.2.1.</span>
    <span class="Arbol_Nombre_4">Entre rectas.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="13.1.2.2.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.2.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.1.2.2.1.</span>
    <span class="Arbol_Nombre_5">Posición Relativa.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.1.2.2.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.2.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.1.2.2.2.</span>
    <span class="Arbol_Nombre_5">Mediatríz.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.1.2.2.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.2.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.1.2.2.3.</span>
    <span class="Arbol_Nombre_5">Bisectriz.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="13.1.2.3."
       nivel="4"
       imagen="Imagenes/arbol/subapartado2.png"
       imagen2="Imagenes/arbol/subapartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado2.png">
    <span style="display: none;">13.1.2.3.</span>
    <span class="Arbol_Nombre_4">Ángulos, Rectas y Polígonos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.1.2.4."
       nivel="4"
       imagen="Imagenes/arbol/subapartado3.png"
       imagen2="Imagenes/arbol/subapartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.1.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado3.png">
    <span style="display: none;">13.1.2.4.</span>
    <span class="Arbol_Nombre_4">Ángulos y Circunferencia.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="13.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">13.2.</span>
    <span class="Arbol_Nombre_2">Figuras Planas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="13.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">13.2.1.</span>
    <span class="Arbol_Nombre_3">Poligonos. Simetrías</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">13.2.2.</span>
    <span class="Arbol_Nombre_3">Triángulos</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="13.2.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.2.1.</span>
    <span class="Arbol_Nombre_4">Clasificación Lados, ángulos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.2.2.</span>
    <span class="Arbol_Nombre_4">Medianas - Baricentro.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.2.3.</span>
    <span class="Arbol_Nombre_4">Alturas - Ortocentro.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.2.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.2.4.</span>
    <span class="Arbol_Nombre_4">Cincunferencias en el triángulo.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="13.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">13.2.3.</span>
    <span class="Arbol_Nombre_3">Cuadriláteros</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">13.2.4.</span>
    <span class="Arbol_Nombre_3">Poligonos Regulares.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">13.2.5.</span>
    <span class="Arbol_Nombre_3">Circunferencia.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">13.2.6.</span>
    <span class="Arbol_Nombre_3">Teorema de Pitágoras. Apliaciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.7."
       nivel="3"
       imagen="Imagenes/arbol/apartado7.png"
       imagen2="Imagenes/arbol/apartado7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.7.')">

    <img  class="manImg" src="Imagenes/arbol/apartado7.png">
    <span style="display: none;">13.2.7.</span>
    <span class="Arbol_Nombre_3">Semejanza</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="13.2.6.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.6.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.6.1.</span>
    <span class="Arbol_Nombre_4">Figuras semajantes. Razón de Semejanza.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.6.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.6.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.6.2.</span>
    <span class="Arbol_Nombre_4">Planos. Escala</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.6.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.6.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.6.3.</span>
    <span class="Arbol_Nombre_4">Teorema de Tales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.6.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.6.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.6.4.</span>
    <span class="Arbol_Nombre_4">Teorema del Cateto. Teorema de la Altura</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="13.2.7."
       nivel="3"
       imagen="Imagenes/arbol/apartado8.png"
       imagen2="Imagenes/arbol/apartado8_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.7.')">

    <img  class="manImg" src="Imagenes/arbol/apartado8.png">
    <span style="display: none;">13.2.7.</span>
    <span class="Arbol_Nombre_3">Áreas y Perímetros</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="13.2.6.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.6.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.6.1.</span>
    <span class="Arbol_Nombre_4">Perímetros.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.6.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.6.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.6.2.</span>
    <span class="Arbol_Nombre_4">Áreas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.2.6.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.2.6.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.2.6.3.</span>
    <span class="Arbol_Nombre_4">Figuras Complejas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3."
       nivel="4"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">13.3.</span>
    <span class="Arbol_Nombre_2">Figuras Tridimensionales - Cuerpos Geométricos</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.1."
       nivel="4"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">13.3.1.</span>
    <span class="Arbol_Nombre_3">Poliedros</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.3.1.1.</span>
    <span class="Arbol_Nombre_4">Primas </span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.3.1.2.</span>
    <span class="Arbol_Nombre_4">Pirámides</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.2."
       nivel="4"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">13.3.2.</span>
    <span class="Arbol_Nombre_3">cuerpos de Revolución</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.3.2.1.</span>
    <span class="Arbol_Nombre_4">Cilindros.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.3.2.2.</span>
    <span class="Arbol_Nombre_4">Conos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.3.2.3.</span>
    <span class="Arbol_Nombre_4">Esferas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.3."
       nivel="4"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">13.3.3.</span>
    <span class="Arbol_Nombre_3">Superfices y Volúmenes</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.3.3.1.</span>
    <span class="Arbol_Nombre_4">Superficies.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.3.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.3.3.2.</span>
    <span class="Arbol_Nombre_4">Volúmenes</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.3.3.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.3.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">13.3.3.3.</span>
    <span class="Arbol_Nombre_4">Cuerpos complejas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.4."
       nivel="4"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">13.4.</span>
    <span class="Arbol_Nombre_2">Transformaciones Geométricas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.4.1."
       nivel="4"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">13.4.1.</span>
    <span class="Arbol_Nombre_3">Movimientos en el Plano</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.4.2."
       nivel="4"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">13.4.2.</span>
    <span class="Arbol_Nombre_3">Traslaciones</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.4.3."
       nivel="4"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">13.4.3.</span>
    <span class="Arbol_Nombre_3">Giros</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.4.4."
       nivel="4"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.4.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">13.4.4.</span>
    <span class="Arbol_Nombre_3">Simetrías. Eje de Simetría.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.4.5."
       nivel="4"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.4.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">13.4.5.</span>
    <span class="Arbol_Nombre_3">Composición de movimientos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="13.4.6."
       nivel="4"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'13.4.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">13.4.6.</span>
    <span class="Arbol_Nombre_3">Mosaicos.</span>
  </div></li></ul></li></ul></li></ul>
 <li>
  <div class="folder"
       id="14."
       nivel="1"
       imagen="Imagenes/arbol/libro13.png"
       imagen2="Imagenes/arbol/libro13_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.')">

    <img  class="manImg" src="Imagenes/arbol/libro13.png">
    <span style="display: none;">14.</span>
    <span class="Arbol_Nombre_1_verde">Trigonometría. Resolución de Triángulos</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="14.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">14.1.</span>
    <span class="Arbol_Nombre_2">Grados y Radianes. Definición Radián.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">14.2.</span>
    <span class="Arbol_Nombre_2">Razones trigonométricas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.1."
       nivel="2"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">14.2.1.</span>
    <span class="Arbol_Nombre_3">Definiciones</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.1.1."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.1.1.</span>
    <span class="Arbol_Nombre_4">Seno</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.1.2."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.1.2.</span>
    <span class="Arbol_Nombre_4">coseno</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.1.3."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.1.3.</span>
    <span class="Arbol_Nombre_4">Tangente</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.1.4."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.1.4.</span>
    <span class="Arbol_Nombre_4">Cosecante, Secante, Cotangente.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.2."
       nivel="2"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">14.2.2.</span>
    <span class="Arbol_Nombre_3">Razones trigonométricas básicas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.3."
       nivel="2"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">14.2.3.</span>
    <span class="Arbol_Nombre_3">Fórmulas Esenciales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.4."
       nivel="2"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">14.2.4.</span>
    <span class="Arbol_Nombre_3">Diferentes Cuadrantes</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.4.1."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.4.1.</span>
    <span class="Arbol_Nombre_4">Ángulo complementario</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.4.2."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.4.2.</span>
    <span class="Arbol_Nombre_4">Ángulo Suplementario</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.4.3."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.4.3.</span>
    <span class="Arbol_Nombre_4">Relaciones Generales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.4.4."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.4.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.4.4.</span>
    <span class="Arbol_Nombre_4">Arcoseno, Arcocoseno, Arcotangente. Calculadora.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">14.3.</span>
    <span class="Arbol_Nombre_2">Resolución de Triángulos</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.3.1."
       nivel="2"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">14.3.1.</span>
    <span class="Arbol_Nombre_3">Rectángulos</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.3.2."
       nivel="2"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">14.3.2.</span>
    <span class="Arbol_Nombre_3">No Rectángulos</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.3.2.1."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.3.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.3.2.1.</span>
    <span class="Arbol_Nombre_4">Teorema del Seno</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.3.2.2."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.3.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.3.2.2.</span>
    <span class="Arbol_Nombre_4">Teorema del Coseno</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">14.4.</span>
    <span class="Arbol_Nombre_2">Fórmulas Trigonométricas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.4.1."
       nivel="2"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">14.4.1.</span>
    <span class="Arbol_Nombre_3">Suma, resta de ángulos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.4.2."
       nivel="2"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">14.4.2.</span>
    <span class="Arbol_Nombre_3">Ángulo Doble</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.4.3."
       nivel="2"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">14.4.3.</span>
    <span class="Arbol_Nombre_3">Ángulo Mitad</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.4.4."
       nivel="2"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.4.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">14.4.4.</span>
    <span class="Arbol_Nombre_3">Suma resta de Senos y cosenos</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.4.5."
       nivel="2"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.4.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">14.4.5.</span>
    <span class="Arbol_Nombre_3">Deducción de fórmulas e igualdades.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">14.5.</span>
    <span class="Arbol_Nombre_2">Ecuaciones Trigonométricas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.5.1."
       nivel="2"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">14.5.1.</span>
    <span class="Arbol_Nombre_3">Definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.5.2."
       nivel="2"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">14.5.2.</span>
    <span class="Arbol_Nombre_3">Cambio de variable.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.5.3."
       nivel="2"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.5.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">14.5.3.</span>
    <span class="Arbol_Nombre_3">utilizando Fórmulas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">14.6.</span>
    <span class="Arbol_Nombre_2">Funciónes Trigonométricas: Representación.</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="14."
       nivel="1"
       imagen="Imagenes/arbol/libro14.png"
       imagen2="Imagenes/arbol/libro14_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.')">

    <img  class="manImg" src="Imagenes/arbol/libro14.png">
    <span style="display: none;">14.</span>
    <span class="Arbol_Nombre_1_verde">Vectores</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="14.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">14.1.</span>
    <span class="Arbol_Nombre_2">Plano</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="14.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">14.1.1.</span>
    <span class="Arbol_Nombre_3">Definición</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">14.1.2.</span>
    <span class="Arbol_Nombre_3">Operaciones - Interpretación Geométrica</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="14.1.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.1.2.1.</span>
    <span class="Arbol_Nombre_4">Producto por un escalar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.1.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.1.2.2.</span>
    <span class="Arbol_Nombre_4">Suma de Vectores.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.1.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.1.2.3.</span>
    <span class="Arbol_Nombre_4">Propiedades Operaciones.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="14.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">14.1.3.</span>
    <span class="Arbol_Nombre_3">Dependencia - Base - Coordenadas.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="14.1.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.1.3.1.</span>
    <span class="Arbol_Nombre_4">Definiciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.1.3.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.1.3.2.</span>
    <span class="Arbol_Nombre_4">Operaciones con coordenadas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="14.1.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">14.1.4.</span>
    <span class="Arbol_Nombre_3">Producto Escalar. Ángulo de dos vectores.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="14.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">14.2.</span>
    <span class="Arbol_Nombre_2">Espacio.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.1."
       nivel="2"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">14.2.1.</span>
    <span class="Arbol_Nombre_3">Definición</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.2."
       nivel="2"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">14.2.2.</span>
    <span class="Arbol_Nombre_3">Operaciones - Interpretación Geométrica</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.2.1."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.2.1.</span>
    <span class="Arbol_Nombre_4">Producto por un escalar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.2.2."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.2.2.</span>
    <span class="Arbol_Nombre_4">Suma de Vectores.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.2.3."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.2.3.</span>
    <span class="Arbol_Nombre_4">Propiedades Operaciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.3."
       nivel="2"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">14.2.3.</span>
    <span class="Arbol_Nombre_3">Dependencia.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.3.1."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.3.1.</span>
    <span class="Arbol_Nombre_4">Combinanción Lineal.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.3.2."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.3.2.</span>
    <span class="Arbol_Nombre_4">Linealmente dependientes - Independientes.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.3.3."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.3.3.</span>
    <span class="Arbol_Nombre_4">Base - Coordenadas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.4."
       nivel="2"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">14.2.4.</span>
    <span class="Arbol_Nombre_3">Producto Escalar de vectores.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.5."
       nivel="2"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">14.2.5.</span>
    <span class="Arbol_Nombre_3">Producto Vectorial</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.5.1."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.5.1.</span>
    <span class="Arbol_Nombre_4">Definición</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.5.2."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.5.2.</span>
    <span class="Arbol_Nombre_4">Propiedades</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.5.3."
       nivel="2"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.5.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">14.2.5.3.</span>
    <span class="Arbol_Nombre_4">Cálculo por Determinante.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="14.2.6."
       nivel="2"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'14.2.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">14.2.6.</span>
    <span class="Arbol_Nombre_3">Producto Mixto - Volumen.</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="15."
       nivel="1"
       imagen="Imagenes/arbol/libro15.png"
       imagen2="Imagenes/arbol/libro15_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.')">

    <img  class="manImg" src="Imagenes/arbol/libro15.png">
    <span style="display: none;">15.</span>
    <span class="Arbol_Nombre_1_verde">Línes Rectas. (2D)</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="15.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">15.1.</span>
    <span class="Arbol_Nombre_2">Espacio Afín y Espacio Vectorial.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="15.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">15.1.1.</span>
    <span class="Arbol_Nombre_3">Espacio Afín</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">15.1.2.</span>
    <span class="Arbol_Nombre_3">Espacio Vectorial.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">15.1.3.</span>
    <span class="Arbol_Nombre_3">Punto medio entre dos puntos.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="15.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">15.2.</span>
    <span class="Arbol_Nombre_2">Ecuaciones de la línea recta.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="15.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">15.2.1.</span>
    <span class="Arbol_Nombre_3">Vectorial.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">15.2.2.</span>
    <span class="Arbol_Nombre_3">Paramétrica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">15.2.3.</span>
    <span class="Arbol_Nombre_3">Continua.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">15.2.4.</span>
    <span class="Arbol_Nombre_3">General. Implicita.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.2.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">15.2.5.</span>
    <span class="Arbol_Nombre_3">Punto - Pendiente. </span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.2.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.2.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">15.2.6.</span>
    <span class="Arbol_Nombre_3">Explicita.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="15.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">15.3.</span>
    <span class="Arbol_Nombre_2">Trabajos básicos.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="15.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">15.3.1.</span>
    <span class="Arbol_Nombre_3">Extraer un punto y un vector director.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">15.3.2.</span>
    <span class="Arbol_Nombre_3">Recta que pasa por dos puntos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.3.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">15.3.3.</span>
    <span class="Arbol_Nombre_3">Recta paralela a otra.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.3.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">15.3.4.</span>
    <span class="Arbol_Nombre_3">Recta perpendicular a otra.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="15.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">15.4.</span>
    <span class="Arbol_Nombre_2">Posición relativa de las rectas.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="15.4.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">15.4.1.</span>
    <span class="Arbol_Nombre_3">Método 1. Sistemas de Ecuaciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.4.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">15.4.2.</span>
    <span class="Arbol_Nombre_3">Método 2. Vectores y Puntos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.4.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">15.4.3.</span>
    <span class="Arbol_Nombre_3">Método 3. Ecuaciones Implicitas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="15.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">15.5.</span>
    <span class="Arbol_Nombre_2">Proyección ortogonal de un punto sobre una recta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">15.6.</span>
    <span class="Arbol_Nombre_2">Simétrico de un punto respecto de una recta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.7."
       nivel="2"
       imagen="Imagenes/arbol/capitulo7.png"
       imagen2="Imagenes/arbol/capitulo7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.7.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo7.png">
    <span style="display: none;">15.7.</span>
    <span class="Arbol_Nombre_2">Distancias.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="15.7.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.7.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">15.7.1.</span>
    <span class="Arbol_Nombre_3">Distancia entre dos puntos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.7.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.7.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">15.7.2.</span>
    <span class="Arbol_Nombre_3">Distancia de un punto y una recta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.7.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.7.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">15.7.3.</span>
    <span class="Arbol_Nombre_3">Distancia entre dos rectas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="15.8."
       nivel="2"
       imagen="Imagenes/arbol/capitulo8.png"
       imagen2="Imagenes/arbol/capitulo8_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.8.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo8.png">
    <span style="display: none;">15.8.</span>
    <span class="Arbol_Nombre_2">Ángulo entre dos rectas. Recta Bisectriz.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="15.9."
       nivel="2"
       imagen="Imagenes/arbol/capitulo9.png"
       imagen2="Imagenes/arbol/capitulo9_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'15.9.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo9.png">
    <span style="display: none;">15.9.</span>
    <span class="Arbol_Nombre_2">Otros tipos de problemas.</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="16."
       nivel="1"
       imagen="Imagenes/arbol/libro16.png"
       imagen2="Imagenes/arbol/libro16_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.')">

    <img  class="manImg" src="Imagenes/arbol/libro16.png">
    <span style="display: none;">16.</span>
    <span class="Arbol_Nombre_1_verde">Cónicas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="16.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">16.1.</span>
    <span class="Arbol_Nombre_2">Lugares Geométricos.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="16.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">16.1.1.</span>
    <span class="Arbol_Nombre_3">Mediatriz</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">16.1.2.</span>
    <span class="Arbol_Nombre_3">Bisectriz</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">16.1.3.</span>
    <span class="Arbol_Nombre_3">Circunferencia</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="16.2.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">16.2.3.</span>
    <span class="Arbol_Nombre_2">Circunferencia</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="16.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">16.2.1.</span>
    <span class="Arbol_Nombre_3">Ecuación.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">16.2.2.</span>
    <span class="Arbol_Nombre_3">Posición relativa de una recta y una circunferencia</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">16.2.3.</span>
    <span class="Arbol_Nombre_3">Potencia de un punto a una circunferencia.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">16.2.4.</span>
    <span class="Arbol_Nombre_3">Eje radical de dos circunferencias.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.2.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">16.2.5.</span>
    <span class="Arbol_Nombre_3">Posición relativa de dos circunferencias.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="16.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">16.3.</span>
    <span class="Arbol_Nombre_2">Elipse</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="16.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">16.3.1.</span>
    <span class="Arbol_Nombre_3">Definición. Elementos Característicos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">16.3.2.</span>
    <span class="Arbol_Nombre_3">Excentricidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.3.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">16.3.3.</span>
    <span class="Arbol_Nombre_3">Ecuacion.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id=""
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;"></span>
    <span class="Arbol_Nombre_2">Hiperbola</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="16.4.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">16.4.1.</span>
    <span class="Arbol_Nombre_3">Definición. Elementos Característicos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.4.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">16.4.2.</span>
    <span class="Arbol_Nombre_3">Ecuacion.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.4.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">16.4.3.</span>
    <span class="Arbol_Nombre_3">Hipérbolas Equiláteras.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.4.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.4.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">16.4.4.</span>
    <span class="Arbol_Nombre_3">Hipérbola $y=k/x$</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id=""
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;"></span>
    <span class="Arbol_Nombre_2">Parábola</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="16.5.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">16.5.1.</span>
    <span class="Arbol_Nombre_3">Definición. Elementos Característicos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.5.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">16.5.2.</span>
    <span class="Arbol_Nombre_3">Ecuacion.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="16.5.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'16.5.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">16.5.3.</span>
    <span class="Arbol_Nombre_3">Cálculo del foco y de la directriz eje paralelo al eje Y</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="17."
       nivel="1"
       imagen="Imagenes/arbol/libro17.png"
       imagen2="Imagenes/arbol/libro17_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.')">

    <img  class="manImg" src="Imagenes/arbol/libro17.png">
    <span style="display: none;">17.</span>
    <span class="Arbol_Nombre_1_verde">Planos</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">17.1.</span>
    <span class="Arbol_Nombre_2">Sistema de Referencia. Base.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">17.2.</span>
    <span class="Arbol_Nombre_2">Puntos en el espacio. </span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">17.2.1.</span>
    <span class="Arbol_Nombre_3">Coordenadas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">17.2.2.</span>
    <span class="Arbol_Nombre_3">Vector.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">17.2.3.</span>
    <span class="Arbol_Nombre_3">Punto Medio.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">17.2.4.</span>
    <span class="Arbol_Nombre_3">Punto Simétrico respecto a un punto.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="17.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">17.3.</span>
    <span class="Arbol_Nombre_2">Rectas en el espacio.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">17.3.1.</span>
    <span class="Arbol_Nombre_3">Ecuaciones de la recta.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.3.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.3.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.3.1.1.</span>
    <span class="Arbol_Nombre_4">Vectorial.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.3.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.3.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.3.1.2.</span>
    <span class="Arbol_Nombre_4">Paramétrica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.3.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.3.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.3.1.3.</span>
    <span class="Arbol_Nombre_4">Continua.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.3.1.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.3.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.3.1.4.</span>
    <span class="Arbol_Nombre_4">General. Implicita.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.3.1.5."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.3.1.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.3.1.5.</span>
    <span class="Arbol_Nombre_4">Obtener punto y vector de una recta.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="17.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">17.3.2.</span>
    <span class="Arbol_Nombre_3">Posición relativa de dos rectas</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="17.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">17.4.</span>
    <span class="Arbol_Nombre_2">Plano en el Espacio</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.4.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">17.4.1.</span>
    <span class="Arbol_Nombre_3">Ecuaciones del Plano</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.4.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.4.1.1.</span>
    <span class="Arbol_Nombre_4">Vectorial.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.4.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.4.1.2.</span>
    <span class="Arbol_Nombre_4">Paramétrica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.4.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.4.1.3.</span>
    <span class="Arbol_Nombre_4">General. Implicita.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.4.1.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.4.1.4.</span>
    <span class="Arbol_Nombre_4">Obtener punto, 2 vectores, vector normal.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.4.1.5."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.1.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.4.1.5.</span>
    <span class="Arbol_Nombre_4">Ejemplos de Planos</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="17.4.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">17.4.2.</span>
    <span class="Arbol_Nombre_3">Posicione Relativas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.4.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.4.2.1.</span>
    <span class="Arbol_Nombre_4">Dos planos</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.4.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.4.2.2.</span>
    <span class="Arbol_Nombre_4">Un plano y una recta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.4.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.4.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">17.4.2.2.</span>
    <span class="Arbol_Nombre_4">Tres Planos</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="17.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">17.5.</span>
    <span class="Arbol_Nombre_2">Ángulos</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.5.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">17.5.1.</span>
    <span class="Arbol_Nombre_3">Entre dos rectas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.5.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">17.5.2.</span>
    <span class="Arbol_Nombre_3">entre dos planos</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.5.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.5.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">17.5.3.</span>
    <span class="Arbol_Nombre_3">entre un plano y una recta.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="17.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">17.6.</span>
    <span class="Arbol_Nombre_2">Distancias.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.6.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.6.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">17.6.1.</span>
    <span class="Arbol_Nombre_3">Entre dos puntos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.6.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.6.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">17.6.2.</span>
    <span class="Arbol_Nombre_3">Entre un punto y una recta.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.6.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.6.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">17.6.3.</span>
    <span class="Arbol_Nombre_3">Entre un punto y un plano.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.6.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.6.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">17.6.4.</span>
    <span class="Arbol_Nombre_3">Entre una recta y un plano.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.6.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.6.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">17.6.5.</span>
    <span class="Arbol_Nombre_3">Entre dos planos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.6.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.6.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">17.6.6.</span>
    <span class="Arbol_Nombre_3">Entre dos rectas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="17.7."
       nivel="2"
       imagen="Imagenes/arbol/capitulo7.png"
       imagen2="Imagenes/arbol/capitulo7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.7.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo7.png">
    <span style="display: none;">17.7.</span>
    <span class="Arbol_Nombre_2">Áreas y Volúmenes.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.7.1."
       nivel="2"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.7.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">17.7.1.</span>
    <span class="Arbol_Nombre_3">Área del Triángulo</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.7.2."
       nivel="2"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.7.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">17.7.2.</span>
    <span class="Arbol_Nombre_3">Volumen Tetraedro</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.8."
       nivel="2"
       imagen="Imagenes/arbol/capitulo8.png"
       imagen2="Imagenes/arbol/capitulo8_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.8.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo8.png">
    <span style="display: none;">17.8.</span>
    <span class="Arbol_Nombre_2">Lugares Geométricos.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="17.8.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.8.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">17.8.1.</span>
    <span class="Arbol_Nombre_3">Plano mediador</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.8.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.8.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">17.8.2.</span>
    <span class="Arbol_Nombre_3">Plano bisector</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.8.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.8.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">17.8.3.</span>
    <span class="Arbol_Nombre_3">Esfera</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.8.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.8.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">17.8.4.</span>
    <span class="Arbol_Nombre_3">Elipsoide</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.8.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.8.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">17.8.5.</span>
    <span class="Arbol_Nombre_3">Paraboloide</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="17.8.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'17.8.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">17.8.6.</span>
    <span class="Arbol_Nombre_3">Hiperboloide</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="18."
       nivel="1"
       imagen="Imagenes/arbol/libro18.png"
       imagen2="Imagenes/arbol/libro18_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'18.')">

    <img  class="manImg" src="Imagenes/arbol/libro18.png">
    <span style="display: none;">18.</span>
    <span class="Arbol_Nombre_1_blue">Series. Sucesiones.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="18.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'18.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">18.1.</span>
    <span class="Arbol_Nombre_2">Sucesiones</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="18.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'18.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">18.2.</span>
    <span class="Arbol_Nombre_2">Seria Aritmética.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="18.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'18.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">18.3.</span>
    <span class="Arbol_Nombre_2">Serie Geométrica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="18.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'18.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">18.4.</span>
    <span class="Arbol_Nombre_2">Sucesiones de potencias.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="18.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'18.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">18.5.</span>
    <span class="Arbol_Nombre_2">Sucesión de Fibonacci.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="18.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'18.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">18.6.</span>
    <span class="Arbol_Nombre_2">Número Aureo</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="18.7."
       nivel="2"
       imagen="Imagenes/arbol/capitulo7.png"
       imagen2="Imagenes/arbol/capitulo7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'18.7.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo7.png">
    <span style="display: none;">18.7.</span>
    <span class="Arbol_Nombre_2">Número e.</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="19."
       nivel="1"
       imagen="Imagenes/arbol/libro19.png"
       imagen2="Imagenes/arbol/libro19_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.')">

    <img  class="manImg" src="Imagenes/arbol/libro19.png">
    <span style="display: none;">19.</span>
    <span class="Arbol_Nombre_1_blue">Funciones Reales Elementales</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="19.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">19.1.</span>
    <span class="Arbol_Nombre_2">Funciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="19.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">19.1.1.</span>
    <span class="Arbol_Nombre_3">Concepto de Función.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">19.1.2.</span>
    <span class="Arbol_Nombre_3">Dominio y Recorrido.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">19.1.3.</span>
    <span class="Arbol_Nombre_3">Puntos de corte con los ejes cartesianos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.1.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">19.1.4.</span>
    <span class="Arbol_Nombre_3">Simetría.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.1.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">19.1.5.</span>
    <span class="Arbol_Nombre_3">Periodicidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.1.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">19.1.6.</span>
    <span class="Arbol_Nombre_3">Idea intuitiva de características:</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="19.1.6.1."
       nivel="4"
       imagen="Imagenes/arbol/subapartado1.png"
       imagen2="Imagenes/arbol/subapartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.6.1.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado1.png">
    <span style="display: none;">19.1.6.1.</span>
    <span class="Arbol_Nombre_4">Crecimiento, Decrecimiento, Constante.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.1.6.2."
       nivel="4"
       imagen="Imagenes/arbol/subapartado2.png"
       imagen2="Imagenes/arbol/subapartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.6.2.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado2.png">
    <span style="display: none;">19.1.6.2.</span>
    <span class="Arbol_Nombre_4">Máximos y Mínimos:</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="19.1.6.2.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.6.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">19.1.6.2.1.</span>
    <span class="Arbol_Nombre_5">Relativos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.1.6.2.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.6.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">19.1.6.2.2.</span>
    <span class="Arbol_Nombre_5">Absolutos.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="19.1.6.3."
       nivel="4"
       imagen="Imagenes/arbol/subapartado3.png"
       imagen2="Imagenes/arbol/subapartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.6.3.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado3.png">
    <span style="display: none;">19.1.6.3.</span>
    <span class="Arbol_Nombre_4">Concavidad, Convexidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.1.6.4."
       nivel="4"
       imagen="Imagenes/arbol/subapartado4.png"
       imagen2="Imagenes/arbol/subapartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.1.6.4.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado4.png">
    <span style="display: none;">19.1.6.4.</span>
    <span class="Arbol_Nombre_4">Continuidad.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="19.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">19.2.</span>
    <span class="Arbol_Nombre_2">Operaciones con Funciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="19.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">19.2.1.</span>
    <span class="Arbol_Nombre_3">Suma, Resta, Multiplicación y División.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">19.2.2.</span>
    <span class="Arbol_Nombre_3">Composición de Funciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">19.2.3.</span>
    <span class="Arbol_Nombre_3">Función Identidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">19.2.4.</span>
    <span class="Arbol_Nombre_3">Función Inversa.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="19.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">19.3.</span>
    <span class="Arbol_Nombre_2">Funciones Elementales.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="19.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">19.3.1.</span>
    <span class="Arbol_Nombre_3">Función Lineal.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">19.3.2.</span>
    <span class="Arbol_Nombre_3">Función Cuadrática.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">19.3.3.</span>
    <span class="Arbol_Nombre_3">Función Radical.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">19.3.4.</span>
    <span class="Arbol_Nombre_3">Función Inversa.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">19.3.5.</span>
    <span class="Arbol_Nombre_3">Función Exponencial.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">19.3.6.</span>
    <span class="Arbol_Nombre_3">Función Logarítmica.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.7."
       nivel="3"
       imagen="Imagenes/arbol/apartado7.png"
       imagen2="Imagenes/arbol/apartado7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.7.')">

    <img  class="manImg" src="Imagenes/arbol/apartado7.png">
    <span style="display: none;">19.3.7.</span>
    <span class="Arbol_Nombre_3">Función Definida a Trozos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.8."
       nivel="3"
       imagen="Imagenes/arbol/apartado8.png"
       imagen2="Imagenes/arbol/apartado8_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.8.')">

    <img  class="manImg" src="Imagenes/arbol/apartado8.png">
    <span style="display: none;">19.3.8.</span>
    <span class="Arbol_Nombre_3">Función  Valor Absoluto.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.9."
       nivel="3"
       imagen="Imagenes/arbol/apartado9.png"
       imagen2="Imagenes/arbol/apartado9_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.9.')">

    <img  class="manImg" src="Imagenes/arbol/apartado9.png">
    <span style="display: none;">19.3.9.</span>
    <span class="Arbol_Nombre_3">Función Parte Entera. Función Escalonada.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.10."
       nivel="3"
       imagen="Imagenes/arbol/apartado10.png"
       imagen2="Imagenes/arbol/apartado10_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.10.')">

    <img  class="manImg" src="Imagenes/arbol/apartado10.png">
    <span style="display: none;">19.3.10.</span>
    <span class="Arbol_Nombre_3">Funciones Trigonométricas:</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="19.3.10.1."
       nivel="4"
       imagen="Imagenes/arbol/subapartado1.png"
       imagen2="Imagenes/arbol/subapartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.10.1.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado1.png">
    <span style="display: none;">19.3.10.1.</span>
    <span class="Arbol_Nombre_4">Seno.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.10.2."
       nivel="4"
       imagen="Imagenes/arbol/subapartado2.png"
       imagen2="Imagenes/arbol/subapartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.10.2.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado2.png">
    <span style="display: none;">19.3.10.2.</span>
    <span class="Arbol_Nombre_4">Coseno.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="19.3.10.3."
       nivel="4"
       imagen="Imagenes/arbol/subapartado3.png"
       imagen2="Imagenes/arbol/subapartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'19.3.10.3.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado3.png">
    <span style="display: none;">19.3.10.3.</span>
    <span class="Arbol_Nombre_4">Tangente.</span>
  </div></li></ul></li></ul></li></ul>
 <li>
  <div class="folder"
       id="20."
       nivel="1"
       imagen="Imagenes/arbol/libro20.png"
       imagen2="Imagenes/arbol/libro20_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.')">

    <img  class="manImg" src="Imagenes/arbol/libro20.png">
    <span style="display: none;">20.</span>
    <span class="Arbol_Nombre_1_blue">Límites y Continuidad.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="20.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">20.1.</span>
    <span class="Arbol_Nombre_2">Límites.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="20.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">20.1.1.</span>
    <span class="Arbol_Nombre_3">Idea intuitiva de Límite.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="20.1.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.1.1.</span>
    <span class="Arbol_Nombre_4">Límite de una función en un punto.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.1.2.</span>
    <span class="Arbol_Nombre_4">Límites Laterales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.1.3.</span>
    <span class="Arbol_Nombre_4">Límites Infinitos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.1.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.1.4.</span>
    <span class="Arbol_Nombre_4">Límites en el Infinito.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="20.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">20.1.2.</span>
    <span class="Arbol_Nombre_3">Indeterminaciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">20.1.3.</span>
    <span class="Arbol_Nombre_3">Cálculo básico de límites.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="20.1.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.3.1.</span>
    <span class="Arbol_Nombre_4">Límites de Polinomios.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.3.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.3.2.</span>
    <span class="Arbol_Nombre_4">Límites de Fracciones de Polinomios.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.3.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.3.3.</span>
    <span class="Arbol_Nombre_4">Límites en Funciones a Trozos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.3.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.3.4.</span>
    <span class="Arbol_Nombre_4">Límites en valor absoluto.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.3.5."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.3.5.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.3.5.</span>
    <span class="Arbol_Nombre_4">Límite de Racionalizar.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.3.6."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.3.6.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.3.6.</span>
    <span class="Arbol_Nombre_4">Indeterminación 1 elevado a infinito.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.1.3.7."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.1.3.7.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">20.1.3.7.</span>
    <span class="Arbol_Nombre_4">Otros límites</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="20.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">20.2.</span>
    <span class="Arbol_Nombre_2">Continuidad.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="20.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">20.2.1.</span>
    <span class="Arbol_Nombre_3">Continuidad en un Punto.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">20.2.2.</span>
    <span class="Arbol_Nombre_3">Discontinuidad. Tipos de Discontinuidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">20.2.3.</span>
    <span class="Arbol_Nombre_3">Continuidad de una función.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">20.2.4.</span>
    <span class="Arbol_Nombre_3">Continuidad en operaciones de funciones continuas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="20.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">20.3.</span>
    <span class="Arbol_Nombre_2">Asíntotas de una función</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="20.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">20.3.1.</span>
    <span class="Arbol_Nombre_3">Asíntota Vertical.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">20.3.2.</span>
    <span class="Arbol_Nombre_3">Asíntota Horizontal.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.3.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">20.3.3.</span>
    <span class="Arbol_Nombre_3">Asíntota Oblicua.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.3.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">20.3.4.</span>
    <span class="Arbol_Nombre_3">Ramas infinitas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="20.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">20.4.</span>
    <span class="Arbol_Nombre_3">Teoremas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="20.4.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">20.4.1.</span>
    <span class="Arbol_Nombre_3">Bolzano</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="20.4.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'20.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">20.4.2.</span>
    <span class="Arbol_Nombre_3">Valor Intermedio</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="21."
       nivel="1"
       imagen="Imagenes/arbol/libro21.png"
       imagen2="Imagenes/arbol/libro21_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.')">

    <img  class="manImg" src="Imagenes/arbol/libro21.png">
    <span style="display: none;">21.</span>
    <span class="Arbol_Nombre_1_blue">Derivadas.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="21.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">21.1.</span>
    <span class="Arbol_Nombre_2">Definición</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="21.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">21.1.1.</span>
    <span class="Arbol_Nombre_3">Tasa de Variación Media</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">21.1.2.</span>
    <span class="Arbol_Nombre_3">Interpretación Geométrica de derivada. Pendiente.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">21.1.3.</span>
    <span class="Arbol_Nombre_3">Cáculo de la derivada utilizando la definición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.1.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">21.1.4.</span>
    <span class="Arbol_Nombre_3">Función derivada.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="21.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">21.2.</span>
    <span class="Arbol_Nombre_2">Derivadas Básicas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">21.3.</span>
    <span class="Arbol_Nombre_2">Reglas de las derivadas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="21.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">21.3.1.</span>
    <span class="Arbol_Nombre_3">Suma y Resta</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">21.3.2.</span>
    <span class="Arbol_Nombre_3">Multiplicación</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.3.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">21.3.3.</span>
    <span class="Arbol_Nombre_3">División</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.3.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">21.3.4.</span>
    <span class="Arbol_Nombre_3">Regla de la Cadena</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="21.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">21.4.</span>
    <span class="Arbol_Nombre_2">Derivabilidad y Continuidad. Derivadas laterales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">21.5.</span>
    <span class="Arbol_Nombre_2">Aplicaciónes de la Derivada</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="21.5.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">21.5.1.</span>
    <span class="Arbol_Nombre_3">Crecimiento, Decrecimiento.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.5.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">21.5.2.</span>
    <span class="Arbol_Nombre_3">Extremos Relativos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.5.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.5.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">21.5.3.</span>
    <span class="Arbol_Nombre_3">Concavidad, Convexidad. Puntos de Inflexión.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.5.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.5.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">21.5.4.</span>
    <span class="Arbol_Nombre_3">Problemas de optimización.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.5.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.5.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">21.5.5.</span>
    <span class="Arbol_Nombre_3">Recta Tangente.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.5.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.5.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">21.5.6.</span>
    <span class="Arbol_Nombre_3">Cálculos de parámetros.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.5.7."
       nivel="3"
       imagen="Imagenes/arbol/apartado7.png"
       imagen2="Imagenes/arbol/apartado7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.5.7.')">

    <img  class="manImg" src="Imagenes/arbol/apartado7.png">
    <span style="display: none;">21.5.7.</span>
    <span class="Arbol_Nombre_3">Cálculo de Límites. Regla de L´Hopital.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.5.8"
       nivel="3"
       imagen="Imagenes/arbol/apartado8.png"
       imagen2="Imagenes/arbol/apartado8_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.5.8')">

    <img  class="manImg" src="Imagenes/arbol/apartado8.png">
    <span style="display: none;">21.5.8</span>
    <span class="Arbol_Nombre_3">Representación Gráfica de Funciones.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="21.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">21.6.</span>
    <span class="Arbol_Nombre_3">Teoremas</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="21.6.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.6.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">21.6.1.</span>
    <span class="Arbol_Nombre_3">Teorema de Rolle.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.6.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.6.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">21.6.2.</span>
    <span class="Arbol_Nombre_3">Teorema del Valor Medio. Lagrange.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="22."
       nivel="1"
       imagen="Imagenes/arbol/libro22.png"
       imagen2="Imagenes/arbol/libro22_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.')">

    <img  class="manImg" src="Imagenes/arbol/libro22.png">
    <span style="display: none;">22.</span>
    <span class="Arbol_Nombre_1_blue">Integrales</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="22.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">22.1.</span>
    <span class="Arbol_Nombre_2">Idea intuitiva de integral.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="22.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">22.1.1.</span>
    <span class="Arbol_Nombre_3">Inversa de la Derivada</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="22.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">22.1.2.</span>
    <span class="Arbol_Nombre_3">Cálculo de Áreas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="22.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">22.2.</span>
    <span class="Arbol_Nombre_2">Calculo de integrales Indefinida.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="22.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">22.2.1.</span>
    <span class="Arbol_Nombre_3">Integrales Básicas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="22.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">22.2.2.</span>
    <span class="Arbol_Nombre_3">Integrales Inmediatas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="22.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">22.2.3.</span>
    <span class="Arbol_Nombre_3">Integrales por Cambio de Variable.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="22.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">22.2.4.</span>
    <span class="Arbol_Nombre_3">integración por Partes.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="22.2.5."
       nivel="2"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.2.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">22.2.5.</span>
    <span class="Arbol_Nombre_3">Funciones Racionales</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="22.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">22.3.</span>
    <span class="Arbol_Nombre_2">Integral Definida. Regla de Barrow.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="22.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">22.4.</span>
    <span class="Arbol_Nombre_2">Cálculo de áreas.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="22.4.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">22.4.1.</span>
    <span class="Arbol_Nombre_3">Entre una curva y el eje OX.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="22.4.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">22.4.2.</span>
    <span class="Arbol_Nombre_3">Entre dos curvas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="22.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">22.5.</span>
    <span class="Arbol_Nombre_2">Volumen de un cuerpo de revolución.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="22.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'22.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">22.6.</span>
    <span class="Arbol_Nombre_2">Problemas</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="23."
       nivel="1"
       imagen="Imagenes/arbol/libro23.png"
       imagen2="Imagenes/arbol/libro23_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.')">

    <img  class="manImg" src="Imagenes/arbol/libro23.png">
    <span style="display: none;">23.</span>
    <span class="Arbol_Nombre_1_naranja">Combinatoria</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="23.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">23.1.</span>
    <span class="Arbol_Nombre_2">Variaciones con repetición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="23.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">23.2.</span>
    <span class="Arbol_Nombre_2">Variaciones sin repetición.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="23.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">23.3.</span>
    <span class="Arbol_Nombre_2">permutaciones</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="23.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">23.4.</span>
    <span class="Arbol_Nombre_2">combinaciones </span>
  </div></li>
 <li>
  <div class="tree-node"
       id="23.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">23.5.</span>
    <span class="Arbol_Nombre_2">Factorial y Número combinatorio.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="23.5.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">23.5.1.</span>
    <span class="Arbol_Nombre_3">Definición</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="23.5.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.5.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">23.5.2.</span>
    <span class="Arbol_Nombre_3">Propiedades.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="23.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">23.6.</span>
    <span class="Arbol_Nombre_2">Triangulo de Tartaglia</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="23.7."
       nivel="2"
       imagen="Imagenes/arbol/capitulo7.png"
       imagen2="Imagenes/arbol/capitulo7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'23.7.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo7.png">
    <span style="display: none;">23.7.</span>
    <span class="Arbol_Nombre_3">Binomio de Newton</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="24."
       nivel="1"
       imagen="Imagenes/arbol/libro24.png"
       imagen2="Imagenes/arbol/libro24_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.')">

    <img  class="manImg" src="Imagenes/arbol/libro24.png">
    <span style="display: none;">24.</span>
    <span class="Arbol_Nombre_1_naranja">Probabilidad</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="24.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">24.1.</span>
    <span class="Arbol_Nombre_2">Definiciones</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="24.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">24.2.</span>
    <span class="Arbol_Nombre_2">Teoría de Conjuntos. Leyes de Morgan</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="24.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">24.3.</span>
    <span class="Arbol_Nombre_2">Frecuencía - Probabilidad.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="24.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">24.3.1.</span>
    <span class="Arbol_Nombre_3">Ley de Laplace</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="24.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">24.3.2.</span>
    <span class="Arbol_Nombre_3">Ley de los Grandes Números.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="24.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">24.4.</span>
    <span class="Arbol_Nombre_2">Fórmulas de probabilidad de conjuntos.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="24.4.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">24.4.1.</span>
    <span class="Arbol_Nombre_3">Axiomas</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="24.4.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">24.4.2.</span>
    <span class="Arbol_Nombre_3">Union</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="24.4.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.4.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">24.4.3.</span>
    <span class="Arbol_Nombre_3">Condicionada.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="24.4.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.4.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">24.4.4.</span>
    <span class="Arbol_Nombre_3">Sucesos Independientes.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="24.5."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.5.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">24.5.</span>
    <span class="Arbol_Nombre_2">Tablas de Contingencia.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="24.6."
       nivel="2"
       imagen="Imagenes/arbol/capitulo6.png"
       imagen2="Imagenes/arbol/capitulo6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.6.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo6.png">
    <span style="display: none;">24.6.</span>
    <span class="Arbol_Nombre_2">Diagramas de Arbol. </span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="24.6.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.6.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">24.6.1.</span>
    <span class="Arbol_Nombre_3">Teorema de la probabilidad Total</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="24.6.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'24.6.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">24.6.2.</span>
    <span class="Arbol_Nombre_3">Teorema de Bayes. "Probabilidad a Posteriori"</span>
  </div></li></ul></li></ul>
 <li>
  <div class="folder"
       id="25."
       nivel="1"
       imagen="Imagenes/arbol/libro25.png"
       imagen2="Imagenes/arbol/libro25_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.')">

    <img  class="manImg" src="Imagenes/arbol/libro25.png">
    <span style="display: none;">25.</span>
    <span class="Arbol_Nombre_1_naranja">Distribuciones de Probabilidad</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="25.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">25.1.</span>
    <span class="Arbol_Nombre_2">Discreta. </span>
  </div></li>
 <li>
  <div class="tree-node"
       id="25.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">25.2.</span>
    <span class="Arbol_Nombre_2">Distribución Binomial o Bernoulli.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="25.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">25.2.1.</span>
    <span class="Arbol_Nombre_3">Definición</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="25.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">25.2.2.</span>
    <span class="Arbol_Nombre_3">Cálculo de Probabilidad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="25.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">25.2.3.</span>
    <span class="Arbol_Nombre_3">Ajuste de un conjunto de datos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="25.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">25.2.4.</span>
    <span class="Arbol_Nombre_3">La distribución de Poisson.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="25.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">25.3.</span>
    <span class="Arbol_Nombre_2">Continua.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="25.4."
       nivel="2"
       imagen="Imagenes/arbol/capitulo4.png"
       imagen2="Imagenes/arbol/capitulo4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.4.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo4.png">
    <span style="display: none;">25.4.</span>
    <span class="Arbol_Nombre_2">Distribución Normal. </span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="25.4.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.4.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">25.4.1.</span>
    <span class="Arbol_Nombre_3">N(0,1). Definición</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="25.4.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">25.4.2.</span>
    <span class="Arbol_Nombre_3">Calculo de probabilidades. Utilización Tabla.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="25.4.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.4.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">25.4.2.1.</span>
    <span class="Arbol_Nombre_4">Intervalos característicos.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="25.4.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.4.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">25.4.2.2.</span>
    <span class="Arbol_Nombre_4">Tipificación.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="25.4.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.4.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">25.4.2.3.</span>
    <span class="Arbol_Nombre_4">Ajuste de un conjunto de datos.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="25.4.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.4.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">25.4.2.</span>
    <span class="Arbol_Nombre_3">Teorema Central del Límite.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="25.5.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo5.png"
       imagen2="Imagenes/arbol/capitulo5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'25.5.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo5.png">
    <span style="display: none;">25.5.1.</span>
    <span class="Arbol_Nombre_2">Aproximación de la Binomial a la Normal.</span>
  </div></li></ul>
 <li>
  <div class="folder"
       id="26."
       nivel="1"
       imagen="Imagenes/arbol/libro26.png"
       imagen2="Imagenes/arbol/libro26_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.')">

    <img  class="manImg" src="Imagenes/arbol/libro26.png">
    <span style="display: none;">26.</span>
    <span class="Arbol_Nombre_1_naranja">Estadística</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="21.1."
       nivel="2"
       imagen="Imagenes/arbol/capitulo1.png"
       imagen2="Imagenes/arbol/capitulo1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.1.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo1.png">
    <span style="display: none;">21.1.</span>
    <span class="Arbol_Nombre_2">Estadística Unidimensional.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.1.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">26.1.1.</span>
    <span class="Arbol_Nombre_3">Definiciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.1.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.1.1.</span>
    <span class="Arbol_Nombre_4">Población, Muestra, Individuo</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.1.2.</span>
    <span class="Arbol_Nombre_4">Tipos de Variables estadísticas.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.1.3.</span>
    <span class="Arbol_Nombre_4">Proceso estudio estadístico.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.1.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">26.1.2.</span>
    <span class="Arbol_Nombre_3">Tablas y Parámetros.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.1.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.2.1.</span>
    <span class="Arbol_Nombre_4">Tabla de Frecuencias simple.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.2.2.</span>
    <span class="Arbol_Nombre_4">Gráficos estadísticos.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.1.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">26.1.3.</span>
    <span class="Arbol_Nombre_3">Parámetros estadísticos</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.1.3.1."
       nivel="4"
       imagen="Imagenes/arbol/subapartado1.png"
       imagen2="Imagenes/arbol/subapartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado1.png">
    <span style="display: none;">26.1.3.1.</span>
    <span class="Arbol_Nombre_4">Centralización</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.1.3.1.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.3.1.1.</span>
    <span class="Arbol_Nombre_5">Media</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.3.1.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.3.1.2.</span>
    <span class="Arbol_Nombre_5">Mediana</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.3.1.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.3.1.3.</span>
    <span class="Arbol_Nombre_5">Moda</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.1.3.2."
       nivel="4"
       imagen="Imagenes/arbol/subapartado2.png"
       imagen2="Imagenes/arbol/subapartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado2.png">
    <span style="display: none;">26.1.3.2.</span>
    <span class="Arbol_Nombre_4">Dispersión.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.1.3.2.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.3.2.1.</span>
    <span class="Arbol_Nombre_5">Recorrido</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.3.2.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.3.2.2.</span>
    <span class="Arbol_Nombre_5">Desviacion Media</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.3.2.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.3.2.3.</span>
    <span class="Arbol_Nombre_5">Varianza</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.3.2.4."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.3.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.1.3.2.4.</span>
    <span class="Arbol_Nombre_5">Desviacion Típica.</span>
  </div></li></ul></li></ul>
 <li>
  <div class="tree-node"
       id="26.1.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">26.1.4.</span>
    <span class="Arbol_Nombre_3">Tabla Frecuencias completa.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.5."
       nivel="3"
       imagen="Imagenes/arbol/apartado5.png"
       imagen2="Imagenes/arbol/apartado5_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.5.')">

    <img  class="manImg" src="Imagenes/arbol/apartado5.png">
    <span style="display: none;">26.1.5.</span>
    <span class="Arbol_Nombre_3">Media - Desviación Típica y Coeficiante de Variación.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.6."
       nivel="3"
       imagen="Imagenes/arbol/apartado6.png"
       imagen2="Imagenes/arbol/apartado6_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.6.')">

    <img  class="manImg" src="Imagenes/arbol/apartado6.png">
    <span style="display: none;">26.1.6.</span>
    <span class="Arbol_Nombre_3">Mediana, Cuartiles y Percentíles.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.1.7."
       nivel="3"
       imagen="Imagenes/arbol/apartado7.png"
       imagen2="Imagenes/arbol/apartado7_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.1.7.')">

    <img  class="manImg" src="Imagenes/arbol/apartado7.png">
    <span style="display: none;">26.1.7.</span>
    <span class="Arbol_Nombre_3">Diagrama de Cajas y Bigotes.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.2."
       nivel="2"
       imagen="Imagenes/arbol/capitulo2.png"
       imagen2="Imagenes/arbol/capitulo2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo2.png">
    <span style="display: none;">26.2.</span>
    <span class="Arbol_Nombre_2">Estadística Bidimensional</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.2.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">26.2.1.</span>
    <span class="Arbol_Nombre_3">Definiciones</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.2.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.2.1.1.</span>
    <span class="Arbol_Nombre_4">Distribución Bidimensional.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="21.2.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.2.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">21.2.1.2.</span>
    <span class="Arbol_Nombre_4">Correlación. Regresión.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.2.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.2.1.3.</span>
    <span class="Arbol_Nombre_4">Correlación Lineal.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.2.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">26.2.2.</span>
    <span class="Arbol_Nombre_3">Parámetros estadísticos</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.2.2.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.2.2.1.</span>
    <span class="Arbol_Nombre_4">Centro de gravedad.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.2.2.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.2.2.2.</span>
    <span class="Arbol_Nombre_4">Covarianza.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.2.2.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.2.2.3.</span>
    <span class="Arbol_Nombre_4">Coeficiente de Correlación.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.2.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">26.2.3.</span>
    <span class="Arbol_Nombre_3">Recta de Regresión.</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.2.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.2.3.1.</span>
    <span class="Arbol_Nombre_4">Mínimos Cuadradados</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.2.3.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.2.3.2.</span>
    <span class="Arbol_Nombre_4">Estimaciones.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.2.3.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.2.3.3.</span>
    <span class="Arbol_Nombre_4">dos rectas.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.2.4."
       nivel="3"
       imagen="Imagenes/arbol/apartado4.png"
       imagen2="Imagenes/arbol/apartado4_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.2.4.')">

    <img  class="manImg" src="Imagenes/arbol/apartado4.png">
    <span style="display: none;">26.2.4.</span>
    <span class="Arbol_Nombre_3">Tablas de Contingencia.</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.3."
       nivel="2"
       imagen="Imagenes/arbol/capitulo3.png"
       imagen2="Imagenes/arbol/capitulo3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.')">

    <img  class="manImg" src="Imagenes/arbol/capitulo3.png">
    <span style="display: none;">26.3.</span>
    <span class="Arbol_Nombre_2">Estadística Inferencial</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.3.1."
       nivel="3"
       imagen="Imagenes/arbol/apartado1.png"
       imagen2="Imagenes/arbol/apartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/apartado1.png">
    <span style="display: none;">26.3.1.</span>
    <span class="Arbol_Nombre_3">Definición. Muestreo. </span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.3.1.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.3.1.1.</span>
    <span class="Arbol_Nombre_4">Tipos de muestra.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.3.1.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.3.1.2.</span>
    <span class="Arbol_Nombre_4">Tecnicas para obtener el muestreo.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.3.1.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.3.1.3.</span>
    <span class="Arbol_Nombre_4">Muestras y Estimadores</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.3.2."
       nivel="3"
       imagen="Imagenes/arbol/apartado2.png"
       imagen2="Imagenes/arbol/apartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/apartado2.png">
    <span style="display: none;">26.3.2.</span>
    <span class="Arbol_Nombre_3">Inferencia en una distribución Normal</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.3.2.1."
       nivel="4"
       imagen="Imagenes/arbol/subapartado1.png"
       imagen2="Imagenes/arbol/subapartado1_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.2.1.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado1.png">
    <span style="display: none;">26.3.2.1.</span>
    <span class="Arbol_Nombre_4">Intervalos de confianza para la media</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="26.3.2.1.1."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.2.1.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.3.2.1.1.</span>
    <span class="Arbol_Nombre_5">Nivel de Confianza</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.3.2.1.2."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.2.1.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.3.2.1.2.</span>
    <span class="Arbol_Nombre_5">Error admisible</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.3.2.1.3."
       nivel="5"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.2.1.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.3.2.1.3.</span>
    <span class="Arbol_Nombre_5">Tamaño Muestra</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.3.2.2."
       nivel="4"
       imagen="Imagenes/arbol/subapartado2.png"
       imagen2="Imagenes/arbol/subapartado2_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.2.2.')">

    <img  class="manImg" src="Imagenes/arbol/subapartado2.png">
    <span style="display: none;">26.3.2.2.</span>
    <span class="Arbol_Nombre_4">Test de Hipótesis</span>
  </div></li></ul>
 <li>
  <div class="tree-node"
       id="26.3.3."
       nivel="3"
       imagen="Imagenes/arbol/apartado3.png"
       imagen2="Imagenes/arbol/apartado3_open.png"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/apartado3.png">
    <span style="display: none;">26.3.3.</span>
    <span class="Arbol_Nombre_3">Inferencia en una Binomial</span>
  </div><ul  class="hidden">
 <li>
  <div class="tree-node"
       id="21.3.3.1."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'21.3.3.1.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">21.3.3.1.</span>
    <span class="Arbol_Nombre_4">Distribunción Binomial</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.3.3.2."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.3.2.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.3.3.2.</span>
    <span class="Arbol_Nombre_4">Disribución de las proporciones muestrales.</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.3.3.3."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.3.3.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.3.3.3.</span>
    <span class="Arbol_Nombre_4">Intervalos de confianza para una proporcion</span>
  </div></li>
 <li>
  <div class="tree-node"
       id="26.3.3.4."
       nivel="4"
       imagen="Imagenes/arbol/hoja.png"
       imagen2="Imagenes/"
       Tipo=""
       Youtube=""
       teoria=""
       ejemplos=""
       ejercicios=""
       onclick="toggleVisibility2(this,'26.3.3.4.')">

    <img  class="manImg" src="Imagenes/arbol/hoja.png">
    <span style="display: none;">26.3.3.4.</span>
    <span class="Arbol_Nombre_4">Test de Hipótesis</span>
  </div></li></ul></li></ul></li></ul></li></ul>`; 
    const Arbol = document.getElementById('Arbol'); 
    
    if (Arbol) {
        Arbol.innerHTML = ArbolHTML;
        console.log("Árbol insertado con éxito.");
    } else {
        console.error("No se encontró un elemento con ID 'Arbol'");
    }
  }

  // Lógica de ejecución automática al cargar el DOM
  if (document.readyState === 'loading') { 
    document.addEventListener('DOMContentLoaded', insertarArbol);
  } else { 
    insertarArbol();
  } 