interface Weather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

interface Social {
  title: string;
  img: string;
  followers: number;
  following: number;
}

interface Hotel {
  name: string;
  img: string;
  address: string;
  phone: number;
  activityImg: string[];
  weather: Weather;
  social_info: Social;
  type: string;
}
