var Smartphone = {
  brand: "Iphone",
  storage: 256,
  chip: "A15 Bionic",
};

var Laptop = {
  keyboardBacklight: true,
  screenSize: 14,
  CPU: "AMD",
  GraphicsDrive: "Radeon",
};

var Cashier = {
  Name: "Pia",
  retailStore: "Potato Corner",
  bodyType: "Slim",
};

var Teacher = {
  specialization: "IT",
  age: 25,
  hairColor: "Blonde",
  withMeterStick: true,
};

var Printer = {
  type: "InkJet",
  inkType: "Ink Bottles",
  printSpeed: 19,
};

document.getElementById("object1").innerHTML =
  Smartphone.brand + " " + Smartphone.storage + " GB " + Smartphone.chip;
document.getElementById("object2").innerHTML =
  Laptop.CPU + " " + Laptop.GraphicsDrive + " " + Laptop.screenSize + " inches";
document.getElementById("object3").innerHTML =
  Cashier.Name + " " + Cashier.retailStore + " " + Cashier.bodyType;
document.getElementById("object4").innerHTML =
  Teacher.specialization + " " + Teacher.age + " years old " + Teacher.hairColor + " " + Teacher.withMeterStick;
document.getElementById("object5").innerHTML =
  Printer.type + " " + Printer.inkType + " " + Printer.printSpeed;
