const casas = [
    "H",
    "G",
    "R",
    "S"
]

function asignacionCasa() {
   let asignaciones = []
   for (let index = 0; index < 16; index++) {
        let casaSeleccionada;
        do {
            const casa = prompt("Seleccionar casa");
            casaSeleccionada = casas.find(x => x == casa);
            if (casaSeleccionada != undefined) {
                asignaciones.push(casaSeleccionada);
            } else {
                alert("Indesición del sombrero, intente nuevamente");
            }
        } while(casaSeleccionada == undefined);   
   }
   
   const totalH = asignaciones.filter(casa => casa == 'H').length;
   const totalG = asignaciones.filter(casa => casa == 'G').length;
   const totalR = asignaciones.filter(casa => casa == 'R').length;
   const totalS = asignaciones.filter(casa => casa == 'S').length;


   const porcentajeH =  (totalH * 100) / 16;
   const porcentajeG =  (totalG * 100) / 16;
   const porcentajeR =  (totalR * 100) / 16;
   const porcentajeS =  (totalS * 100) / 16;

   let porcentajeCasas = [
        porcentajeH,
        porcentajeG,
        porcentajeR,
        porcentajeS
    ];

    let porcentajesIguales;
    for (let i = 0; i < porcentajeCasas.length; i++) {
        porcentajesIguales = porcentajeCasas[i] == porcentajeCasas[i+1];
    }

    if (porcentajesIguales) {
        alert("Clasificación normal");
    } else {  
        const porcentajeDominante = Math.max(porcentajeH, porcentajeG, porcentajeR, porcentajeS);
        const indice = porcentajeCasas.findIndex(dominante => dominante == porcentajeDominante);
        switch (indice) {
            case 0:
                alert("La casa dominante es Hufflepuff con un porcentaje de: " +porcentajeDominante + "%");
                break;
            case 1:
                alert("La casa dominante es Gryffindor con un porcentaje de: " +porcentajeDominante + "%");
                break;
            case 2:
                alert("La casa dominante es Ravenclaw con un porcentaje de: " +porcentajeDominante + "%");
                break;
            case 3:
                alert("La casa dominante es Slytherin con un porcentaje de: " +porcentajeDominante + "%");
                break;
        }
    }
}

asignacionCasa();