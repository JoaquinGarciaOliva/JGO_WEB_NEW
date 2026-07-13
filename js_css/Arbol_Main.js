function cambiarImagen(element) {
    let img = element;        
    const imagen1 = selectedcarpeta.getAttribute('imagen'); // Ejemplo: "img/foto1.jpg"
    const imagen2 = selectedcarpeta.getAttribute('imagen2'); // Ejemplo: "foto2.jpg"

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
    const atributos = ['Youtube', 'teoria', 'ejemplos', 'ejercicios'];
    
    atributos.forEach(attr => {
        const valor = origen.getAttribute(attr) || '';
        Datossel.setAttribute(attr, valor);
    });

    Mostrar_Web(1); // Por defecto muestra video al hacer clic
  }


function Mostrar_Web(Tiposel) {
    const Datossel = document.getElementById('DivHeader');
    const pagDefault = 'Paginas/Pagina_Inicial.html';
    
    // Mapeo de botones e iconos para evitar tantos "if"
    const configs = {
        1: { attr: 'Youtube',    id: 'iconvideo',      img: 'play_video' },
        2: { attr: 'teoria',     id: 'iconteoria',     img: 'teoria' },
        3: { attr: 'ejemplos',   id: 'iconejemplos',   img: 'ejemplos' },
        4: { attr: 'ejercicios', id: 'iconejercicios', img: 'ejercicios' }
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


 

  



