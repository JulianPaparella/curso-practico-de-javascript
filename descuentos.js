


function calculardescuentos(precio, descuento){

    const porcentajecondescuento = 100- descuento;
    const preciocondescuento = (precio * porcentajecondescuento) /100

    return preciocondescuento;

   
};

const listacupon = [
"Jrstyle",
"navidadconme",
"feliznavidad",

];
//interacción con html 

function generatediscount(){

const inputprice = document.getElementById("InputPrice")
const PriceValue = inputprice.value;

const inputdescuento = document.getElementById("Inputcupon")
const discountprice = inputdescuento.value;

let descuento;


switch(discountprice){

case listacupon [0]:
    descuento = 15;
    break;

case listacupon[1]:
    descuento = 50;    
    break;

case listacupon[2]:
    descuento = 10;
    break;    

}

const pricewithdiscount = calculardescuentos(PriceValue, descuento);

const resultp = document.getElementById("result");
resultp.innerText = "el precio con tu cupón de  descuento es: $" + pricewithdiscount;

}