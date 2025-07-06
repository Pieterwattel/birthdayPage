class API {
  constructor(dataObj) {
    this.link = dataObj.link;
    this.organiseData = dataObj.organiseData;
  }

  async getData() {
    try {
      const response = await fetch(this.link);
      const responseData = await response.json();
      const organisedData = this.organiseData(responseData);
      return organisedData;
    } catch (error) {
      console.log(error);
    }
  }
}

const apiInstances = {
  weatherJuly8th: new API({
    link: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Utrecht/2025-07-08?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Ctemp%2Cprecip%2Cwindspeed&key=AHAA8Z74EUEVKTCHA3CDW7MXG&contentType=json',
    organiseData: function (responseData) {
      const day = responseData.days[0];
      const date = day.datetime;
      const location = responseData.address;
      const precip = day.precip;
      const temp = day.temp;
      const wind = day.windspeed;
      return { date, location, precip, temp, wind };
    },
  }),
};

export { apiInstances };
