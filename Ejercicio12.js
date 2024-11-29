function generarMatrizIdentidad(tamaño) {
    let matriz = [];
  
    for (let i = 0; i < tamaño; i++) {
      matriz[i] = [];
      for (let j = 0; j < tamaño; j++) {
        if (i === j) {
          matriz[i][j] = 1;
        } else {
          matriz[i][j] = 0;
        }
      }
    }
  
    return matriz;
  }
  
  const matrizIdentidad = generarMatrizIdentidad(7);
  
  console.log(matrizIdentidad);
  