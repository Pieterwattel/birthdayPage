import { format } from 'date-fns';

const weather = {
  formatWeatherData: (dataObj) => {
    const date = format(dataObj.date, 'EEE MMM do yyyy');
    const location = dataObj.location + ` \u{1F4CC}`;
    const precip = weather.getPrecipitationString(dataObj.precip);
    const wind = weather.getWindspeedString(dataObj.wind);
    const temp = weather.getTemperatureString(dataObj.temp);
    return { date, location, precip, wind, temp };
  },

  getPrecipitationString: (amount) => {
    let string;
    switch (true) {
      case amount <= 0:
        return `${amount}mm, no rain ☼`;
      case amount <= 2:
        return `${amount}mm, light rain \u{1F324}`;
      case amount <= 5:
        return `${amount}mm, moderate rain \u{1F326}`;
      case amount <= 10:
        return `${amount}mm, heavy rain \u{1F327}`;
      case amount > 10:
        return `${amount}mm, very heavy rain \u{26C6}`;
    }
  },

  getWindspeedString: (amount) => {
    let string;
    switch (true) {
      case amount <= 1:
        return `${amount}km/h, calm`;
      case amount <= 5:
        return `${amount}km/h, light air`;
      case amount <= 11:
        return `${amount}km/h, light breeze`;
      case amount <= 19:
        return `${amount}km/h, gentle breeze`;
      case amount <= 28:
        return `${amount}km/h, moderate breeze`;
      case amount <= 38:
        return `${amount}km/h, strong breeze`;
      case amount <= 61:
        return `${amount}km/h, firm wind`;
      case amount <= 88:
        return `${amount}km/h, storm`;
      case amount > 88:
        return `${amount}km/h, violent storm!!`;
    }
  },

  getTemperatureString: (temp) => {
    switch (true) {
      case temp <= 0:
        return `${temp}°C, freezing 🧊`;
      case temp <= 10:
        return `${temp}°C, cold 🧥`;
      case temp <= 20:
        return `${temp}°C, cool 🌫`;
      case temp <= 25:
        return `${temp}°C, mild 🙂`;
      case temp <= 30:
        return `${temp}°C, warm ☀️`;
      case temp > 30:
        return `${temp}°C, hot 🔥`;
    }
  },
};

export { weather };
