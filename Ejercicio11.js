const palabras=["Ordenador","Portatil","Teclado","Mouse","Monitor","Television"];
function buscarPalabras(array, letra) {
    return array.filter(palabra => palabra.startsWith(letra));
  }

 console.log(buscarPalabras(palabras, "T"));