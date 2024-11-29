const productos=[["Platano",2,20],["Manzana",3,10],["Naranja",1,15],["Juguetes",7,10]];

const productocaro=productos.reduce((acumulador,producto)=>{
    if(producto[1]>acumulador[1]){
        return producto;
    }else{
        return acumulador;
    }
});
const encontrar=productos.find((producto)=>producto[0]=="Manzana");

const stock=productos.every(producto=>producto[1]>10);
console.log("Todos los precios son mayores a 10: "+stock);
console.log(encontrar);
console.log(productocaro);  
