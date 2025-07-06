import { apiInstances } from './apis';
import { weather } from './weather';

const controller = {
  returnWeatherData: async () => {
    const weatherClass = apiInstances.weatherJuly8th;
    let weatherData = await weatherClass.getData();
    const formattedData = weather.formatWeatherData(weatherData);
    return formattedData;
  },
};

export { controller };
