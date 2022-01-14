function areaSquare() {
    let side = document.getElementById("SquareInputLong").value;
    let select = document.getElementById("SquareSelect")
    let resultSquare = document.getElementById("resultSquare")

    
    if(side == "" || side <=0 ){
        resultSquare.textContent = "Ingrese una cantidad valida"
    }else{
        side = parseInt(side)
        let result = side * side
        resultSquare.textContent = `Result: ${result} ${select.value}`
    }


    return result
}

function perimeterSquare() {
    let side = document.getElementById("SquareInputLong").value;
    let select = document.getElementById("SquareSelect");
    let resultSquare = document.getElementById("resultSquare");

    if(side == "" || side <=0 ){
        resultSquare.textContent = "Ingrese una cantidad valida"
    }else{
        side = parseInt(side)
        let result = side + side + side + side;
        resultSquare.textContent = `Result: ${result} ${select.value}²`;
    }

    return result
}

function areaRectangle() {
    let sides = document.querySelectorAll(".RectangleInputLong");
    let select = document.getElementById("rectangleSelect");
    let resultRectangle = document.getElementById("resultRectangle");
    let result;
    let sideA = sides[0].value;
    let sideB = sides[1].value;

    if (sideA === "" || sideB === "" || sideA <= 0 || sideB <= 0) {
        resultRectangle.textContent = "Ingrese una cantidad valida"
    } else {
        result = sideA * sideB;
        resultRectangle.textContent = `Result: ${result} ${select.value}²`;
    }

    return result
}