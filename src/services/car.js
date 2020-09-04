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

import { BASE_API_URL } from './base';

import AuthToken from '../utils/AuthToken';
import { Platform } from 'react-native'

// get 요청 (server Router - get을 받을준비)
async function fetchCarList(start = 0, size = 10) {
  const url = `${BASE_API_URL}/car`;

  const token = await AuthToken.get();
  console.log(token)

  const resp = await fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  })

  const data = await resp.json()
  return data;
  // return carList.slice(start, start + size);
}

async function fetchCarDetail(carId) {
  const url = `${BASE_API_URL}/car/${carId}`;
  const token = await AuthToken.get();
  try {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })

    const data = await resp.json();
    return data;
  } catch (err) {
    return err;
  }
}


async function registerCar(modelName, year, manufacturer, vin, image) {
  const token = await AuthToken.get();
  const url = `${BASE_API_URL}/car`
  const data = new FormData();



  // data.append("carImage", file);
  if (image) {
    const file = Platform.OS === 'android' ?
      {
        // npm install mime (mime.getType) // 추후에 변경
        type: 'image/jpeg',
        uri: image.uri.replace('file:/', 'file:///'),
        name: 'car'
      } :
      {
        type: image.type,
        uri: image.uri,
        name: 'car'
      }
    data.append("carImage", file);
  }
  data.append("modelName", modelName);
  data.append('year', year);
  data.append('manufacturer', manufacturer);
  data.append('vin', vin);
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

// Define Auction API 
async function getAuctionDetail(auctionId) {
  const url = `${BASE_API_URL}/auction/${auctionId}`;
  const token = await AuthToken.get();

  try {
    const auctionDetail = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })

    const data = await auctionDetail.json();
    return data
  }
  catch (err) {
    console.error(err);
    return {
      result: 'fail',
      message: "Error"
    }
  }
}

async function fetchAuctionList() {
  const url = `${BASE_API_URL}/auction`;
  const token = await AuthToken.get();

  try {
    const auctionList = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }
    });

    return await auctionList.json();

  } catch (err) {
    console.error(err);
    return {
      result: 'fail',
      message: "Error"
    }
  }
}

async function registerAuction(carId, minPrice, description) {
  const url = `${BASE_API_URL}/auction`;
  const token = await AuthToken.get();

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        carId: carId,
        minPrice: minPrice
      })
    })

    const data = await resp.json()
    return data;
  } catch (err) {
    console.error(err);
    return err
  }


}

export { fetchCarList, fetchCarDetail, registerCar, fetchAuctionList, registerAuction, getAuctionDetail };
