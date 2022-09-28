import { Contacto } from "./Contacto.js";
import { Home } from "./Home.js";
import { Portafolio } from "./Portafolio.js";
import { Servicios } from "./Servicios.js";

export async function Router(){
    let {hash} = location;

    if (!hash || hash === "#/") {
        document.getElementById("main").innerHTML = Home();
        document.getElementById("homeLink").classList.add("active");
    }else if (hash === "#/servicios") {
        document.getElementById("main").innerHTML = Servicios();
        document.getElementById("serviciosLink").classList.add("active");
    }else if (hash === "#/portafolio") {
        document.getElementById("main").innerHTML = Portafolio();
        document.getElementById("portafolioLink").classList.add("active");
    }else if (hash === "#/contacto") {
        document.getElementById("main").innerHTML = Contacto();
        document.getElementById("contactoLink").classList.add("active");
    }else{
        document.getElementById("main").innerHTML = "contenido de portafolio interno";
    }
    document.querySelector(".loader").style.display="none"

}