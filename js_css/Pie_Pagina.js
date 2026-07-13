/**
 * Inserta el HTML del footer fijo justo antes del cierre de la etiqueta </body>.
 */

function insertarFooter() {
    // El código HTML que quieres insertar, guardado como una cadena de texto.

    const footerHTML = `
             <p>
                <img src="Imagenes/licencia.png" alt="CC BY-NC-ND 4.0" style="max-width:250px; max-height: 70px; margin-bottom: 40px;">
                 2025 Website developed by Joaquín García Oliva 
<a href="https://jgoweb.blogspot.com" target="_blank">                
 <img src="Imagenes/logo_jgo_3_1.png" alt="" style="max-width: 50px; max-height: 50px; margin-bottom: 10px;">
 </a>
                and licensed under 
                <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>
                <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em; max-height: 1em; margin-left: .2em;">
                <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em; max-height: 1em; margin-left: .2em;">
                <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em; max-height: 1em; margin-left: .2em;">
                <img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" alt="" style="max-width: 1em; max-height: 1em; margin-left: .2em;">
            </p>        
    `;
    const Pie_Pagina = document.getElementById('piepagina');    
    Pie_Pagina.innerHTML = footerHTML;
    const Pie_Pagina2 = document.getElementById('piepagina2');    
    Pie_Pagina2.innerHTML = footerHTML;
}

// Llama a la función una vez que el script se ha cargado. Es mejor llamarla después de que el DOM esté completamente cargado.
if (document.readyState === 'loading') {                   // Si el DOM aún se está cargando, espera al evento 'DOMContentLoaded'
    document.addEventListener('DOMContentLoaded', insertarFooter);
} else {                                                   // Si el DOM ya está cargado (o el script se carga al final del <body>), ejecútala inmediatamente
    insertarFooter();
}

