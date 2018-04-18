import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export const data = [
  {
    name: 'hotel',
    img: 'assets/images/hotel/1.jpg',
    data: {
      address: 'Russia, Sevastopol Admiral Nahimov',
      phone: +79780012345
    }
  },
  {
    name: 'weather',
    img: 'assets/images/weather/w.jpg',
    data: {
      description:
        'Thunderstorms likely. Low 7C. Winds light and variable. Chance of rain 80%.',
      water: 2,
      temperature: 7
    }
  },
  {
    name: 'social_info',
    img: 'assets/images/social/s.jpg',
    data: {
      followers: 122,
      following: 445
    }
  }
];

export const data$ = Observable.of(data);
