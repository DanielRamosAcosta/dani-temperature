export class LocationManager {
  async getCurrentLocation() {
    const response = await fetch("http://ip-api.com/json");

    const data = await response.json();

    return { latitude: data.lat, longitude: data.lon };
  }
}
