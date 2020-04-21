var car;
var brand = [];
var wheel = [];
var brand1;
var brand2;
var brand3;
var brand4;
var wheel1;
var wheel2;
var wheel3;
var wheel4;
var n = 4; //number of wheels
function createCar(plate, brand, color) {
    var plate = document.getElementById("licensePlate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var regexPlate = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/igm;
    var errorCounter = 0;
    plate = plate.toUpperCase();
    if (regexPlate.test(plate) == false) {
        window.alert("The License plate number is not valid");
        errorCounter++;
    }
    else if (color == "" || brand == "") {
        window.alert("Please insert Color and/or Brand");
        errorCounter++;
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
    if (errorCounter > 0) {
        console.log("You have errors");
    }
}
;
function addWheels(brand, diameter) {
    var brand = new Array;
    var wheel = new Array;
    var count = 0;
    for (var i_1 = 0; i_1 < n; i_1++) {
        var w = i_1 + 1;
        var temp = (document.getElementById("brandWheel" + w).value);
        brand.push(temp);
        if (brand[i_1] != "") {
            count++;
        }
        else {
            document.getElementById(("brandWheel" + (i_1 + 1))).value = "";
            window.alert("Please select the brand of the wheel number " + (i_1 + 1));
        }
    }
    for (var i_2 = 0; i_2 < n; i_2++) {
        var w = i_2 + 1;
        var temp = parseFloat((document.getElementById("wheel" + w).value));
        wheel.push(temp);
        if (wheel[i_2] >= 0.4 && wheel[i_2] <= 2) {
            count++;
        }
        else {
            document.getElementById(("wheel" + (i_2 + 1))).value = "";
            window.alert("Diameter of wheel number " + (i_2 + 1) + " is not valid");
        }
    }
    if (count == 8) {
        window.confirm("Great! Your wheels are valid! They will be now added to your car!");
    }
    else {
        return false;
    }
    ;
    for (var i = 0; i < 4; i++) {
        car.addWheel((new Wheel(wheel[i], brand[i])));
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
