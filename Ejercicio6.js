const numaleatorios=[];
for(let i=0;i<10;i++){
    numaleatorios.push(Math.floor(Math.random()*100)+1);
}

const numerosordenados=numaleatorios.sort((a,b)=>a-b);
console.log("Numeros ordenados")
console.log(numerosordenados);
const numerosinversos=numerosordenados.reverse();
console.log("Numeros inversos")
console.log(numerosinversos);