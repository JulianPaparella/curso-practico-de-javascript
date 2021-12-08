

    function calculamoda(lista){

     

        lista.map(
            
            function(elemento){
        
           const lista1count = {};
                
                if(lista1count[elemento]){
        
                    lista1count[elemento] = lista1count[elemento] + 1
        
                }
        
        else 
        lista1count[elemento] = 1;
        
        
        }
        
        
        );
        const listaarray1 = Object.entries(lista1count).sort(
        
         
            function(elementoA, elementoB){
        
                return elementoA[1] - elementoB[1]
            }
            );
            const moda = listaarray1[listaarray1.length - 1];

            return moda;
        
    }