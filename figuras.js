//code de la figura cuadrada 
console.group("cuadrado");


function perimetroCuadrado(lado){

 return lado * 4

}

console.groupEnd();
function areaCuadrado(lado){

    return lado * lado

} 


     //code del triángulo 
       console.group("triángulo");
      
      function perimetrodelTriangulo(lado1, lado2, baseTriangulo){

        return lado1 + lado2 + baseTriangulo
      }  

      function areadelTriangulo (baseTriangulo, alturaTriangulo){

        return (baseTriangulo * alturaTriangulo) / 2
      } 
      console.groupEnd();
 //code del circulo 
 console.group("círculo");

function  diametroCirculo(radio){
    return radio * 2
}

//PI
const PI = Math.PI;


//circunferencia 
function perimetroCirculo(radio){
const diametro = diametroCirculo(radio);
return diametro * PI; 
}  
//área
function  areaCirculo(radio){

    return (radio * radio) * PI
} 


 console.groupEnd();

 
 function trianguloisoseles_altura (a, b){

return Math.sqrt((a * a) - (b* b) /2)

 };
 //interacción con html 

 
 function calcularPerimetrocuadrado(){

    const input = document.getElementById("perimetrodelcuadrado");
    const value = input.value;

const perimetro = perimetroCuadrado(value);
alert(perimetro);
 }

 
 function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const área = areaCuadrado(value);
    alert(área);

 }
 
 function calcularPerimetroTriangulo(){
    const input_t1 = document.getElementById("inputlado1Triangulo");
    const valuel1 = parseInt(input_t1.value);
    const input_t2 = document.getElementById("inputlado2Triangulo");
    const valuel2 = parseInt(input_t2.value);
    const input_b = document.getElementById("inputbaseTriangulo");
    const valuel3 = parseInt(input_b.value);
   
    const perimetro = perimetrodelTriangulo(valuel1, valuel2, valuel3);
    alert(perimetro);


 }

function calcularAreaTriangulo(){

    const inputlado_area = document.getElementById("arealadotriangulo");
    const valuelado_area = parseInt(inputlado_area.value);
    const inputbase_area = document.getElementById("areabasetriangulo");
    const valuebase_Area = parseInt(inputbase_area.value)

    const areademitriangulo = areadelTriangulo(valuelado_area, valuebase_Area);
    alert(areademitriangulo);

}


function calcularPerimetroCirculo (){

    const inputperimetrodelCirculo = document.getElementById("inputperimetrocirculo");
    const valueRadio_Circulo = parseInt(inputperimetrodelCirculo.value);

    const perimetrodelcirculo = perimetroCirculo(valueRadio_Circulo);
    alert(perimetrodelcirculo)

}
function calcularAreaCirculo(){

    const inputarealdelcirculo = document.getElementById("inputperimetrocirculo");
    const valueareaCirculo = parseInt( inputarealdelcirculo.value);
    
    const areadelcirculo =  areaCirculo(valueareaCirculo);
    alert(areadelcirculo);

}
function calcularalturatrianguloi(){

const input_a_deltrianguloi = document.getElementById("adel_trianguloi")
const valuea = parseInt( input_a_deltrianguloi.value)

const input_b_deltrianguloi = document.getElementById("bdel_trianguloi")
const valueb = parseInt(input_b_deltrianguloi.value)

const alturadeltrianguloi = trianguloisoseles_altura(valuea, valueb);
alert(alturadeltrianguloi);

}