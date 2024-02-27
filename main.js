   const historia1= document.getElementById("container-texto1");
   const historia2= document.getElementById("container-texto2");
   const historia3= document.getElementById("container-texto3");
   const historia4= document.getElementById("container-texto4");
   const historia5= document.getElementById("container-texto5");
   const historia6= document.getElementById("container-texto6");
   
   
   let numeroPagina=1;


ocultarHistorias();


function siguientePagina(e){
   //e.preventDefault();
   numeroPagina++;

   window.scrollTo(0,0);

   if(numeroPagina>6){
      numeroPagina=1;
      historia5.style.display="none";
      historia1.style.display="";
     }

   else if( document.getElementById("container-texto"+numeroPagina).style.display=="none"){
      ocultarHistorias();
      historia1.style.display="none";
      document.getElementById("container-texto"+numeroPagina).style.display="";
   }
 
   
}

function ocultarHistorias(){
   historia2.style.display="none";
   historia3.style.display="none"
   historia4.style.display="none"
   historia5.style.display="none"
   historia6.style.display="none"
}

function Pagina5(){
   ocultarHistorias();
   historia1.style.display="none"
   historia5.style.display=""
}


function Pagina1(){
   ocultarHistorias();
   historia1.style.display=""
}