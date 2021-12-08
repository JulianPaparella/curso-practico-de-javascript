function calcular_media_aritmetica(lista){
    //let sumalista = 0;

   // for (let i = 0; i < lista.length; i++) {
        
     //   sumalista = sumalista + lista[i];

     const sumarlista = lista.reduce(

function(valoracumulado = 0, nuevoelEmento){
return valoracumulado + nuevoelEmento;

}


     );



const promedio = sumarlista / lista.length;
return promedio;
 
};


const solosalarios = Bar_Salary.map(

    
    function(cliente){

        return cliente.salary

    }
);

const solosalariossorted = solosalarios.sort(

    
    function(a, b ){
 if(a === b){
        return 0;
    }

 if(a < b){
        return -1;
    }
    
    else {

return 1;
    }
}
    );

    function espar(numero){

    
        if(numero % 2 === 0){
        return true 
    }else{
        return false 
    }
};


function medianaSalarios(lista){

const mitad = parseInt( lista.length /2);


if(espar(lista.length)){
const person1 = lista[mitad - 1]
const person2 = lista[mitad];
const mediana = calcular_media_aritmetica([person1,person2])
return mediana; 
}else{
const personmitad = lista[mitad]
return personmitad
}
}
const MedianaGeneral = calcular_media_aritmetica(solosalariossorted)

//mediana del top 10

const splicestart = (solosalariossorted.length * 90) / 100
const splicecount = solosalariossorted.length - splicestart;

const salariostop10 = solosalariossorted.splice(
splicestart,
splicecount
)

const medianatop10 = medianaSalarios(salariostop10);

console.log ({

    MedianaGeneral,
    medianatop10,
});