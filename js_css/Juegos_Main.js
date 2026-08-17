function cambiarImagen(element) {
    let img = element;        
    const imagen1 = selectedcarpeta.getAttribute('imagen');   // Ejemplo: "img/foto1.jpg"
    const imagen2 = selectedcarpeta.getAttribute('imagen2');  // Ejemplo: "foto2.jpg"

    // Función interna para extraer solo el nombre del archivo (ej: "foto.jpg")
    const extraerNombre = (ruta) => {
        if (!ruta) return "";
        return ruta.split('/').pop(); 
    };

    const nombreActual = extraerNombre(img.src);
    const nombreRef1 = extraerNombre(imagen1);
    const nombreRef2 = extraerNombre(imagen2);

    // Lógica de intercambio
    if (nombreActual === nombreRef1) {  img.src = imagen2; } else 
    if (nombreActual === nombreRef2) {  img.src = imagen1; }
}


function cambiarPropiedad(Codigosel) {
    const origen = document.getElementById(Codigosel);
    const Datossel = document.getElementById('DivHeader');
    
    if (!origen) return;

    // Lista de atributos a copiar
    const atributos = ['Youtube', 'teoria', 'ejemplos', 'ejercicios', 'interactivo'];
    
    // Nombres concretos de los divs asociados a cada atributo (en el mismo orden)
    const idsDivs = ['div-youtube', 'div-teoria', 'div-ejemplos', 'div-ejercicios', 'div-interactivo'];
    
    let primerVisible = null; // Guardará el número del primer div visible (1 a 5)

    atributos.forEach((attr, index) => {             
        const valor = origen.getAttribute(attr) || '';
        Datossel.setAttribute(attr, valor);

        // Obtenemos el div correspondiente
        const divAsociado = document.getElementById(idsDivs[index]);

        if (divAsociado) {
            // Si tiene contenido (no está vacío), se muestra; si no, se oculta
            if (valor.trim() !== '') {
                divAsociado.style.display = ''; // O 'flex', 'grid', etc., según tu diseño
                
                // Si todavía no hemos encontrado ningún div visible, este es el primero
                if (primerVisible === null) {
                    primerVisible = index + 1; // Sumamos 1 porque el índice empieza en 0
                }
            } else {
                divAsociado.style.display = 'none';
            }
        }
    });

    // Ejecuta Mostrar_Web con el primer div visible o 1 por defecto si todos están vacíos
    Mostrar_Web(primerVisible || 1);
}

function Mostrar_Web(Tiposel) {
    const Datossel = document.getElementById('DivHeader');
    const pagDefault = 'Paginas/Pagina_Inicial.html';
    
    // Mapeo de botones e iconos para evitar tantos "if"
    const configs = {
        1: { attr: 'Youtube',     id: 'iconvideo',       img: 'Clase2' },
        2: { attr: 'teoria',      id: 'iconteoria',      img: 'unapersona' },
        3: { attr: 'ejemplos',    id: 'iconejemplos',    img: 'DosJugadores' },
        4: { attr: 'ejercicios',  id: 'iconejercicios',  img: 'ejercicios' },
        5: { attr: 'interactivo', id: 'iconinteractivo', img: 'ejerinteractivo' }
    };

    // Actualizar todos los iconos a su estado normal y el seleccionado a "down"
    Object.keys(configs).forEach(key => {
        const item       = configs[key];
        const valor      = Datossel.getAttribute(item.attr) || pagDefault;
        const imgElement = document.getElementById(item.id);

        if (key == Tiposel) {  actualizarIframe2(valor === '' ? pagDefault : valor);
                               imgElement.src = `Imagenes/${item.img}_down.png`;
                     } else {  imgElement.src = `Imagenes/${item.img}.png`; }
    });
}


// ************ SELECCIONAR CARPETA - cambiando el icono ************
   let selectedcarpeta = null;
   function toggleVisibility2(element,codigo) {              
            let sublist = element.nextElementSibling;
            if (sublist) {                 
                sublist.classList.toggle('hidden');                    
                selectedcarpeta = element;                                           
                cambiarImagen(selectedcarpeta.querySelector('.manImg'));  
            }            
            cambiarPropiedad(codigo);                    
     }


 //  *********************
  // Función para cambiar el contenido del segundo iframe basado en la selección
        function actualizarIframe2(contenido) {            
            let iframe2 = document.getElementById("webviewer");  // Obtener el iframe2 (el del tercer div)            
            iframe2.src = contenido;                             // Cambiar la URL del iframe2 para mostrar una página diferente
        }


//  *********************  Muestra sólo los nodos menores o iguales a algo, tipo de importancia *********
  function filtrarDivs(Tiposel) {
       const Datossel= document.getElementById('DivHeader');
       Datossel.setAttribute('Tipo', Tiposel);
           
      const divs2 = document.querySelectorAll('.folder');
       divs2.forEach(div => {
        const prop = div.getAttribute('Tipo');         
        if (prop > Tiposel) { div.style.display = "none";} else { div.style.display = "block";}
      });

      const divs = document.querySelectorAll('.tree-node');
      divs.forEach(div => {
        const prop = div.getAttribute('Tipo');         
        if (prop > Tiposel) { div.style.display = "none";} else { div.style.display = "block";}
      });


       if (Tiposel == 1) { document.getElementById('nivel1').src = "Imagenes/flecha_red_down.png"; }
                    else { document.getElementById('nivel1').src = "Imagenes/flecha_red.png";};
       if (Tiposel == 2) { document.getElementById('nivel2').src = "Imagenes/flecha_blue_down.png"; }
                    else { document.getElementById('nivel2').src = "Imagenes/flecha_blue.png";};
       if (Tiposel == 3) { document.getElementById('nivel3').src = "Imagenes/flecha_green_down.png"; }
                    else { document.getElementById('nivel3').src = "Imagenes/flecha_green.png";};
       if (Tiposel == 4) { document.getElementById('nivel4').src = "Imagenes/flecha_lila_down.png"; }
                    else { document.getElementById('nivel4').src = "Imagenes/flecha_lila.png";};

    }


 
 
//  ************************* seleccionarYDesplegarNodo ***************

function seleccionarYDesplegarNodo(nodoId) {
    // 1. Buscar el elemento div del nodo por su ID exacto
    const nodoDiv = document.getElementById(nodoId);
    if (!nodoDiv) return;

    // 2. Marcar visualmente como seleccionado (puedes adaptar la clase a tu CSS)
    nodoDiv.classList.add('selected');

    // 3. Desplegar los padres y cambiar sus iconos a imagen abierta
    let elementoActual = nodoDiv.parentElement; // Esto es el <li>
    
    while (elementoActual) {
        // Si el li contiene un ul oculto, lo mostramos
        const ulOculto = elementoActual.querySelector(':scope > ul.hidden');
        if (ulOculto) {
            ulOculto.classList.remove('hidden');
        }

        // Si el elemento superior tiene un div desplegable, actualizamos su imagen a 'imagen2'
        const divPadre = elementoActual.parentElement?.previousElementSibling;
        if (divPadre && divPadre.hasAttribute('imagen2')) {
            const imgPadre = divPadre.querySelector('.manImg');
            const imgOpen = divPadre.getAttribute('imagen2');
            if (imgPadre && imgOpen && imgOpen !== "Imagenes/") {
                imgPadre.src = imgOpen;
            }
        }

        // Subimos un nivel en el árbol del DOM
        elementoActual = elementoActual.parentElement?.closest('li');
    }

    // 4. Si el propio nodo seleccionado es una carpeta y tiene hijos, lo abrimos también
    const ulHijoPropio = nodoDiv.nextElementSibling;
    if (ulHijoPropio && ulHijoPropio.tagName === 'UL') {
        ulHijoPropio.classList.remove('hidden');
        const imgPropia = nodoDiv.querySelector('.manImg');
        const imgOpenPropia = nodoDiv.getAttribute('imagen2');
        if (imgPropia && imgOpenPropia && imgOpenPropia !== "Imagenes/") {
            imgPropia.src = imgOpenPropia;
        }
    }
}



