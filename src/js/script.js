// One Step Event

let OneStepEvent = document.querySelectorAll(".main-action")
let templateOption = document.getElementById("optionTemplate").content

OneStepEvent.forEach(element => {
    console.log(element.dataset.action)
    element.addEventListener("click", function (e) {
        OneStepEvent.forEach(removeActive => {
            removeActive.classList.remove("active")
        })
        element.classList.toggle("active")

        let btnStatus = document.getElementsByClassName("Next-two-step")
        btnStatus[0].classList.add("active")

        btnStatus[0].setAttribute("data-currentStep", "home")
        btnStatus[0].setAttribute("data-nextStep", element.dataset.action)
    })
});

let stepContainer = document.getElementsByClassName("step")

let btnStatus = document.getElementsByClassName("Next-two-step")

btnStatus[0].addEventListener("click", function () {

    if (btnStatus[0].dataset.currentstep !== undefined || btnStatus[0].dataset.nextstep !== undefined) {
        nextStep(btnStatus[0].dataset.currentstep, btnStatus[0].dataset.nextstep)
        btnStatus[0].classList.remove("active")
    } else {

    }


})

function nextStep(currentStep, nextStep) {
    console.log(`current step es el siguiente : ${currentStep + nextStep} `)

    for (let i = 0; i < stepContainer.length; i++) {
        console.log(stepContainer[i].dataset.name)

        if (stepContainer[i].dataset.name === currentStep) {
            stepContainer[i].classList.add("disable")
        } else if (stepContainer[i].dataset.name === nextStep) {
            stepContainer[i].classList.add("active")
            let body = document.querySelector("body")
            body.setAttribute("class", nextStep)
        } else {

        }

        if (stepContainer[i].dataset.name == "geometry") {
            stepGeometry()
        }

    }
}

function stepGeometry() {
    let dataStep = [{
            "nombre":"Square"
        },
        {
            "nombre": "Rectangulo"
        }
    ]
 
    let geometryContainer = document.querySelector(".two-step.geometry")

    dataStep.forEach(element => {
        templateOption.querySelector(".title").textContent = element.nombre
        let prueba = templateOption.cloneNode(true)
        geometryContainer.appendChild(prueba)

    });

    console.log(geometryContainer)
}

console.log(stepContainer)