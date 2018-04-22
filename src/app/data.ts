import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export const hotels: Hotel[] = [
  {
    name: 'Residence Henri IV',
    img: './assets/images/image1.jpg',
    address: 'Misericordia, 67',
    phone: 4031234789,
    activityImg: ['./assets/images/r1.jpg', './assets/images/res.jpg'],
    weather: {
      title: 'Cloudy',
      icon: 'cloud',
      water: 20,
      temperature: 24
    },
    social_info: {
      title: 'Residence Henri IV',
      img: './assets/images/b1.jpg',
      followers: 2390,
      following: 308
    },
    type: 'hotel'
  },
  {
    name: 'Sabor da Saudade Resort',
    img: './assets/images/image2.png',
    address: 'Gloriantstraat, 10HS',
    phone: 8123456789,
    activityImg: [
      './assets/images/square/image5s.jpg',
      './assets/images/square/image14s.jpg'
    ],
    weather: {
      title: 'Always sunny',
      icon: 'sun',
      water: 25,
      temperature: 30
    },
    social_info: {
      title: 'Sabor da Saudade Resort',
      img: './assets/images/square/image5s.jpg',
      followers: 4500,
      following: 123
    },
    type: 'weather'
  },
  {
    name: 'Novotel',
    img: './assets/images/image33.jpg',
    address: '2 Rue Scribe, 9th',
    phone: 7125656780,
    activityImg: [
      './assets/images/square/image6s.jpg',
      './assets/images/square/image9s.jpg'
    ],
    weather: {
      title: 'Cloudy',
      icon: 'cloud',
      water: 20,
      temperature: 25
    },
    social_info: {
      title: 'Novotel',
      img: './assets/images/square/image6s.jpg',
      followers: 11360,
      following: 601
    },
    type: 'hotel'
  },
  {
    name: 'Blue Lake',
    img: './assets/images/fishing1.jpg',
    address: 'Perdido Blvd',
    phone: 4563456789,
    activityImg: [
      './assets/images/square/fishing1s.jpg',
      './assets/images/square/fishing2s.jpg'
    ],
    weather: {
      title: 'Rainy',
      icon: 'rain',
      water: 18,
      temperature: 23
    },
    social_info: {
      title: 'Blue Lake',
      img: './assets/images/square/fishing2s.jpg',
      followers: 3089,
      following: 25
    },
    type: 'fishing'
  },
  {
    name: 'Orange Beach',
    img: './assets/images/fishing4.jpg',
    address: 'Costa dorado',
    phone: 5553433389,
    activityImg: [
      './assets/images/square/fishing4s.jpg',
      './assets/images/square/fishing3s.jpg'
    ],
    weather: {
      title: 'Rainy',
      icon: 'rain',
      water: 21,
      temperature: 27
    },
    social_info: {
      title: 'Orange Beach',
      img: './assets/images/square/fishing4s.jpg',
      followers: 7082,
      following: 251
    },
    type: 'fishing'
  },
  {
    name: 'Hype Park Residence',
    img: './assets/images/image30.jpg',
    address: 'Abbey Road 23',
    phone: 4323408089,
    activityImg: [
      './assets/images/square/image30s.jpg',
      './assets/images/square/image16s.jpg'
    ],
    weather: {
      title: 'Cloudy',
      icon: 'cloud',
      water: 20,
      temperature: 25
    },
    social_info: {
      title: 'Hype Park Residence',
      img: './assets/images/square/image30s.jpg',
      followers: 17082,
      following: 1251
    },
    type: 'tours'
  },
  {
    name: 'Marriott Guangzhou',
    img: './assets/images/image48.jpg',
    address: '122 Liuhua Rd',
    phone: 101345639,
    activityImg: [
      './assets/images/square/image4s.jpg',
      './assets/images/square/image7s.jpg'
    ],
    weather: {
      title: 'Sunny',
      icon: 'sun',
      water: 20,
      temperature: 25
    },
    social_info: {
      title: 'Marriott Guangzhou',
      img: './assets/images/square/image7s.jpg',
      followers: 24508,
      following: 412
    },
    type: 'tours'
  }
];
