class Car {
  constructor(model) {
    this.model = model;
    this.fuel = 0;
  }

  getCarModel() {
    console.log(`The car Model is : ${this.model}`);
  }

  addFuel(t) {
    this.fuel += t;
  }
}

const Car1 = new Car("TATA");
Car1.getCarModel();
console.log(`Initial Fuel of ${Car1.model} is : ${Car1.fuel}`);
Car1.addFuel(25);
console.log(`Updated Fuel of ${Car1.model} is : ${Car1.fuel}`);

const Car2 = new Car("TESLA");
Car2.getCarModel();
console.log(`Initial Fuel of ${Car2.model} is : ${Car2.fuel}`);
Car2.addFuel(30);
console.log(`Updated Fuel of ${Car2.model} is : ${Car2.fuel}`);

const Car3 = new Car("BMW");
console.log(`Initial Fuel of ${Car3.model} is : ${Car3.fuel}`);
Car3.addFuel(50);
console.log(`Updated Fuel of ${Car3.model} is : ${Car3.fuel}`);

const Car4 = new Car("BENZ");
Car4.getCarModel();
console.log(`Initial Fuel of ${Car4.model} is : ${Car4.fuel}`);
Car4.addFuel(75);
console.log(`Updated Fuel of ${Car4.model} is : ${Car4.fuel}`);
