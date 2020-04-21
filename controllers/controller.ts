var car:any;
var brand:string[] = [];
var wheel:number[] = [];
var brand1:string;
var brand2:string;
var brand3:string;
var brand4:string;
var wheel1:number;
var wheel2:number;
var wheel3:number;
var wheel4:number;
var n: number = 4; //number of wheels

function createCar(plate:string,brand:string,color:string){
  var plate = (<HTMLInputElement>document.getElementById("licensePlate")).value;
  var color = (<HTMLInputElement>document.getElementById("color")).value;
  var brand = (<HTMLInputElement>document.getElementById("brand")).value;
  var regexPlate = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/igm;
  var errorCounter:number = 0;

  plate = plate.toUpperCase();

  if (regexPlate.test(plate) == false) {
    window.alert("The License plate number is not valid");
    errorCounter++;
  } else if(color=="" || brand==""){
    window.alert("Please insert Color and/or Brand");
    errorCounter++;
  }
  else {
    car=new Car(plate,color,brand);
    window.confirm("Your car has been created");
    let plateLog:any = document.getElementById("plateLog");
    plateLog.textContent = car.plate;
    let brandLog:any = document.getElementById("brandLog")
    brandLog.textContent = car.brand;
    let colorLog:any = document.getElementById("colorLog")
    colorLog.textContent = car.color;
    document.querySelector(".popup-1").style.display = "none";
    document.querySelector(".popup-2").style.display = "flex";
    return car;
  }
  if (errorCounter>0){
    console.log("You have errors");
  }
};

function addWheels(brand:string[], diameter:number[]) {
  var brand:string[] = new Array;
  var wheel:number[] = new Array;
  var count:number = 0;

  for (let i = 0; i < n; i++) {
    var w=i+1;
    let temp = ((<HTMLInputElement>document.getElementById("brandWheel"+w)).value);
    brand.push(temp);
    if (brand[i]!=""){
      count++;
    }else{
      document.getElementById(("brandWheel"+(i+1))).value="";
      window.alert("Please select the brand of the wheel number "+(i+1));
    }
}

for (let i = 0; i < n; i++) {
    var w = i+1
    let temp:number = parseFloat(((<HTMLInputElement>document.getElementById("wheel"+w)).value));
    wheel.push(temp);
    if (wheel[i]>=0.4 && wheel[i]<=2){
      count++;
    }else{
      document.getElementById(("wheel"+(i+1))).value="";
      window.alert("Diameter of wheel number "+(i+1)+" is not valid");
    }
}

if (count==8){
  window.confirm("Great! Your wheels are valid! They will be now added to your car!");
} else{
  return false;
};

  for (var i = 0; i < 4; i++) {
    car.addWheel((new Wheel(wheel[i],brand[i])))
  }
  document.querySelector(".popup-3").style.display = "flex";
  document.querySelector(".popup-2").style.display = "none";
  document.querySelector(".popup-1").style.display = "none";

  let plateLog:any = document.getElementById("plateLog2");
  plateLog.textContent = car.plate;
  let brandLog:any = document.getElementById("brandLog2")
  brandLog.textContent = car.brand;
  let colorLog:any = document.getElementById("colorLog2")
  colorLog.textContent = car.color;
  for (var i = 0; i < 4; i++) {
    document.getElementById("wheel"+(i+1)+"Log").textContent = car.wheels[i]["diameter"];
  };
  for (var i = 0; i < 4; i++) {
    document.getElementById("brand"+(i+1)+"Log").textContent = car.wheels[i]["brand"];
  }
  return car;
};
