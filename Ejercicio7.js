const notas=[["Alejandro",9],
            ["Carlos",8],
            ["Juancarlos",7],
            ["Sebas",6]] 
;
notas[2][1]=9.5;
const notasplanas=notas.flat();
console.log(notasplanas);