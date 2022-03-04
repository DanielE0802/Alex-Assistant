// Media aritmética - arithmetic average

const listAverageArithmetic = [
    0.68,
    -0.38,
    -1.02,
    1.12,
    0.23,
    -0.72
]

// inicia Function media aritmetica -> como parametro recibe el array, lo ordena y retorna la mitad

function averageArithmetic(array) {
    let plusList = array.reduce((valorAcumulado = 0, nuevo) => valorAcumulado + nuevo)
    return plusList / array.length
}

// Temrina Function media aritmetica 

// Inicia Function media cuadratica

function averageCuadratic(array){
    let total = array.reduce((a,b)=> (a +  b **2),0)
    return  Math.sqrt(total/array.length).toFixed(3)
}

// .toFixed(3) -> para implementar el número de decimales

console.log(averageCuadratic(listAverageArithmetic))

// Termina Function media cuadratica

// inicia Function media -> como parametro recibe el array, lo ordena y retorna la mitad

function Media(array) {
    let mitad = parseInt(array.length / 2);
    array.sort((a, b) => a - b);
    console.log(mitad)
    if (esPar(array.length) === true) {
        const element1 = array[mitad - 1]
        const element2 = array[mitad]

        return averageArithmetic([element1, element2])
    } else {

        return mediana = array[mitad]
    }

}

// Termina Function media

// inicia Function moda -> recibe un array y retorna el numero que mas se repite

function mode(arr) {
    return arr.sort((a, b) =>
        arr.filter(number => number === a).length -
        arr.filter(number => number === b).length
    ).pop();
}

// Termina Function moda 

function calculateAverageArithmetic() {
    let result = averageArithmetic(listAverageArithmetic)
    document.getElementById("averageArithmetic").innerText = result
}
calculateAverageArithmetic()


// Helpers

function esPar(number) {
    return (number % 2 === 0 );
}




console.log(Media(listAverageArithmetic))