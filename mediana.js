

    //función que automatice el proceso de busqueda de media 

    function Medianap(listauser){
        
        listauser.sort(function(a,b){
     if(a === b){
         return 0;
     }
     if (a < b) {
         return -1;
     } else {
         return 1;
     }

        });
       
        const mitadlista=  parseInt(listauser.length /2); 
        let mediana 
        if(espar(listauser.length)){

            const numero1 = listauser[mitadlista -1] ;
            const numero2 = listauser[mitadlista];
            
            
            const promemedio_numeros =  calcular_media_aritmetica([
                numero1,
                numero2,
              
            ]);
            mediana = promemedio_numeros;  
        return mediana;
        }
        
            
            else {
            
                mediana = listauser[mitadlista]
                return mediana;
            


    }  
            
}
//función para el cálculo de la media arimetica 
function calcular_media_aritmetica(lista){
    let sumalista = 0;
    
        for (let i = 0; i < lista.length; i++) {
            
            sumalista = sumalista + lista[i];
    
          
    };
    const promedio = sumalista/lista.length;
    return promedio;

    };
    
    //función que determina cuando un numero es par 
    function espar(numero){
    
        if(numero % 2 === 0){
    
    return true;
    }
    else {
    return false 
    
    }
    }