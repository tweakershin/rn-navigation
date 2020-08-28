let carList = [
  {
    id: 1,
    modelName: "Audi ",
    year: 2018,
    manufacturer: "Audi",
    vin: "1234123123414",
  },
  {
    id: 2,
    modelName: "Venz ",
    year: 2018,
    manufacturer: "Venz",
    vin: "1234123123413",
  },
  {
    id: 3,
    modelName: "Venz ",
    year: 2013,
    manufacturer: "Venz",
    vin: "1234123123412",
  },
];

function fetchCarList(start = 0, size = 10) {
  return carList.slice(start, start + size);
}

function fetchCarDetail(carId) {
  const car = carList.filter((car) => {
    return car.id === carId;
  });
  if (car) {
    return car[0];
  } else {
    return null;
  }
}

export { fetchCarList, fetchCarDetail };
