// создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    return `Тип ТС: ${this.type}, марка: ${this.brand}`;
  }
  getPrice() {
    return `Стоимость: ${this.price} руб`;
  }
}

// создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }
  getDoorsCount() {
    return `Количество дверей: ${this.doors}`;
  }
}
// создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return `Максимальная скорость: ${this.maxSpeed}`;
  }
}

//Объект, с которым вам предстоит работать:
const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>",
  },
];
// создаем объекты на основе массива
function createObjeckt(data) {
  return data.map((item) => {
    if (item.type === "car") {
      return new Car(item.type, item.price, item.brand, item.doors);
    } else if (item.type === "bike") {
      return new Bike(item.type, item.price, item.brand, item.maxSpeed);
    }
  });
}

// создаем функцию для вывода информации на страницу
function outputObject(item){
    const div = document.querySelector('.transport');
    item.forEach(element => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <h2>${element.brand}</h2>
        <p>${element.getInfo()}</p>
        <p>${element.getPrice()}</p>
        ${element.type === 'car' ? `<p>${element.getDoorsCount()}</p>` : ''}
      ${element.type === 'bike' ? `<p>${element.getMaxSpeed()}</p>` : ''}`;
      div.appendChild(newDiv)
      
    });

}
const transportObject = createObjeckt(data);
outputObject(transportObject)
