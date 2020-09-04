let carList = [
  {
    id: 1,
    modelName: "Audi ",
    year: 2018,
    image: 'https://cnet2.cbsistatic.com/img/QzitAxlkDjr_diAeYCYFLMEqHrA=/1200x675/2020/03/23/155558b1-a366-481e-b24a-923c13a006e8/2020-audi-s6-001.jpg',
    manufacturer: "Audi",
    vin: "1234123123414",
    auctionState: 'bidding',
    bidList: [{
      price: 3500,
      username: 'MemberA',
      createdDate: (Date.now()) - 10000
    }, {
      price: 4500,
      username: 'MemberA',
      createdDate: Date.now()
    },]
  },
  {
    id: 2,
    modelName: "Benz ",
    year: 2018,
    image: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/45390/gls-exterior-right-front-three-quarter-2.jpeg',
    manufacturer: "Benz",
    vin: "1234123123413",
    auctionState: 'bidding'
  },
  {
    id: 3,
    modelName: "Benz ",
    year: 2013,
    manufacturer: "Benz",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBiZTnSL7U7z7vPVu3OeUPck_uZ0VOmc2hDw&usqp=CAU',
    vin: "1234123123412",
    auctionState: 'none'
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
import { BASE_API_URL } from './base';

import AuthToken from '../utils/AuthToken';
import { Platform } from 'react-native'

async function registerCar(modelName, year, manufacturer, vin, image) {
  const token = await AuthToken.get();

  const url = `${BASE_API_URL}/car`
  const data = new FormData();

  data.append("carImage", {
    type: image.type,
    uri: image.uri,
    name: 'car.jpg'
  });

  // data.append("carImage", image.uri);
  data.append("modelName", modelName);
  data.append('year', year);
  data.append('manufacturer', manufacturer);
  data.append('vin', vin);
  console.log(token)

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: data
    })

    const resultData = await resp.json();

    return resultData;
  } catch (err) {
    console.log(err);
    throw err
  }
}

async function fetchAuctionList() {
  const auctionList = carList.filter((item) => {
    if (item.auctionState === 'bidding') {
      return true
    } else {
      return false
    }
  });
  return auctionList;
}

async function registerAuction(carId, minPrice, description) {
  carList = carList.map((item) => {
    if (item.id === carId && item.auctionState !== 'bidding') {
      return {
        ...item,
        auctionState: 'bidding',
        minPrice: minPrice,
        bid_desc: description
      }
    }
    else {
      return item
    }
  });
}

export { fetchCarList, fetchCarDetail, registerCar, fetchAuctionList, registerAuction };
