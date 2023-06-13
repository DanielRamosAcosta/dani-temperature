import { LocationManager } from "./LocationManager";

export class LocationManagerFake extends LocationManager {
  async getCurrentLocation() {
    return { latitude: 28.1, longitude: -15.4098 };
  }
}
