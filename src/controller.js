import { apiInstances } from './apis';
import { weather } from './weather';

const controller = {
  returnWeatherData: () => {
    return apiInstances.weatherJuly8th
      .getData()
      .then((resolve) => {
        let weatherData = resolve;
        return weatherData;
      })
      .then((weatherData) => {
        return weather.formatWeatherData(weatherData);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export { controller };
