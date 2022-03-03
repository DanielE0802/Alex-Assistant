function discountNormal(price, discount) {
    return (price * (100 - discount)) / 100
}

// Coupons

let coupons = [{
        "name": "merry-christmas",
        "discount": 20
    },
    {
        "name": "october",
        "discount": 17
    },
    {
        "name": "daniel",
        "discount": 50
    }
]

// Agarrar el valor del cupón

function haveCouponDiscount (couponValue){

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        // Si no está el cupon
        alert("El cupón " + couponValue + " no es válido");
        return undefined
    } else {
        // Si funciona el cupón
        return userCoupon.discount

    }
}

function applyDiscountHaveCoupon(){
    let productValueCoupon = document.getElementById("productValueCoupon").value
    let nameOfCoupon=  document.getElementById("nameOfCoupon").value 
    let discount = haveCouponDiscount(nameOfCoupon)
    console.log(productValueCoupon)
    console.log(nameOfCoupon)
    let finalPrice = discountNormal(productValueCoupon,discount)
    console.log(finalPrice)
    let resultProductValueCoupon = document.getElementById("resultProductValueCoupon")
    resultProductValueCoupon.textContent= finalPrice
}


function applyNotCouponDiscount (){
    let precioOriginal= document.getElementById("productValue")
    let descuento = document.getElementById("productNotCouponDiscount")
    let resultnotCoupon = document.getElementById("resultnotCoupon")

    let precioFinal = discountNormal(precioOriginal.value , descuento.value)
    resultnotCoupon.innerText= precioFinal
}


// Web
let containerHaveCoupon = document.getElementsByClassName("haveCoupon")
let containerNotCoupon = document.getElementsByClassName("notCoupon")

let btnNotCoupon = document.getElementById("notCoupon")
let btnHaveCoupon = document.getElementById("haveCoupon")

btnHaveCoupon.addEventListener("click", function(){
    containerNotCoupon[0].classList.toggle("active")
    if(containerHaveCoupon[0].classList.contains("active")== true){
        containerHaveCoupon[0].classList.remove("active")
    }
})

btnNotCoupon.addEventListener("click", function(){
    containerHaveCoupon[0].classList.toggle("active")
    if(containerNotCoupon[0].classList.contains("active")== true){
        containerNotCoupon[0].classList.remove("active")
    }
})