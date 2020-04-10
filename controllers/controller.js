var car;
var brand1;
var brand2;
var brand3;
var brand4;
var wheel1;
var wheel2;
var wheel3;
var wheel4;
function createCar(plate, brand, color) {
    var plate = document.getElementById("licensePlate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var regexPlate = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/igm;
    plate = plate.toUpperCase();
    if (regexPlate.test(plate) == false) {
        window.alert("The License plate number is not valid");
        return false;
    }
    else if (color == "" || brand == "") {
        window.alert("Please insert Color and/or Brand");
        return false;
    }
    else {
        car = new Car(plate, color, brand);
        window.confirm("Your car has been created");
        var plateLog = document.getElementById("plateLog");
        plateLog.textContent = car.plate;
        var brandLog = document.getElementById("brandLog");
        brandLog.textContent = car.brand;
        var colorLog = document.getElementById("colorLog");
        colorLog.textContent = car.color;
        document.querySelector(".popup-1").style.display = "none";
        document.querySelector(".popup-2").style.display = "flex";
        return car;
    }
}
;
function validateWheels(brand1, brand2, brand3, brand4, wheel1, wheel2, wheel3, wheel4) {
    brand1 = (document.getElementById("brandWheel1").value);
    brand2 = (document.getElementById("brandWheel2").value);
    brand3 = (document.getElementById("brandWheel3").value);
    brand4 = (document.getElementById("brandWheel4").value);
    wheel1 = parseFloat(document.getElementById("wheel1").value);
    wheel2 = parseFloat(document.getElementById("wheel2").value);
    wheel3 = parseFloat(document.getElementById("wheel3").value);
    wheel4 = parseFloat(document.getElementById("wheel4").value);
    var count = 0;
    var brandArray = new Array(brand1, brand2, brand3, brand4);
    var wheelArray = new Array(wheel1, wheel2, wheel3, wheel4);
    for (var i = 0; i < brandArray.length; i++) {
        if (brandArray[i] != "") {
            count++;
        }
        else {
            document.getElementById(("brandWheel" + (i + 1))).value = "";
            window.alert("Please select the brand of the wheel number " + (i + 1));
        }
    }
    for (var i = 0; i < wheelArray.length; i++) {
        if (wheelArray[i] >= 0.4 && wheelArray[i] <= 2) {
            count++;
        }
        else {
            document.getElementById(("wheel" + (i + 1))).value = "";
            window.alert("Diameter of wheel number " + (i + 1) + " is not valid");
        }
    }
    if (count == 8) {
        window.confirm("Great! Your wheels are valid! You can now add them to your car!");
        document.getElementById("addWheels").removeAttribute("disabled");
    }
}
;
function addWheels(brand, diameter) {
    var brand1 = (document.getElementById("brandWheel1").value);
    var brand2 = (document.getElementById("brandWheel2").value);
    var brand3 = (document.getElementById("brandWheel3").value);
    var brand4 = (document.getElementById("brandWheel4").value);
    var wheel1 = parseFloat(document.getElementById("wheel1").value);
    var wheel2 = parseFloat(document.getElementById("wheel2").value);
    var wheel3 = parseFloat(document.getElementById("wheel3").value);
    var wheel4 = parseFloat(document.getElementById("wheel4").value);
    var brandArray = new Array(brand1, brand2, brand3, brand4);
    var wheelArray = new Array(wheel1, wheel2, wheel3, wheel4);
    for (var i = 0; i < 4; i++) {
        car.addWheel((new Wheel(wheelArray[i], brandArray[i])));
    }
    document.querySelector(".popup-3").style.display = "flex";
    document.querySelector(".popup-2").style.display = "none";
    document.querySelector(".popup-1").style.display = "none";
    var plateLog = document.getElementById("plateLog2");
    plateLog.textContent = car.plate;
    var brandLog = document.getElementById("brandLog2");
    brandLog.textContent = car.brand;
    var colorLog = document.getElementById("colorLog2");
    colorLog.textContent = car.color;
    for (var i = 0; i < 4; i++) {
        document.getElementById("wheel" + (i + 1) + "Log").textContent = car.wheels[i]["diameter"];
    }
    ;
    for (var i = 0; i < 4; i++) {
        document.getElementById("brand" + (i + 1) + "Log").textContent = car.wheels[i]["brand"];
    }
    return car;
}
;
