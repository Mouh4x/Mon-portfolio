/* Applique le thème enregistré avant le premier affichage (évite le clignotement). */
try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}
