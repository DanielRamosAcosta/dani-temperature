export class TemperatureManager {
  async getCurrentTemperature(location) {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`
    );

    const data = await response.json();

    return data.current_weather.temperature;
  }
}
