export class TemperatureApp {
  constructor(locationManager, temperatureManager) {
    this.locationManager = locationManager;
    this.temperatureManager = temperatureManager;
  }

  async getCurrentTemperature() {
    const location = await this.locationManager.getCurrentLocation();

    const celcisus = await this.temperatureManager.getCurrentTemperature(
      location
    );

    return this.celciusToFahrenheit(celcisus);
  }

  celciusToFahrenheit(celcius) {
    return celcius * 1.8 + 32;
  }
}
