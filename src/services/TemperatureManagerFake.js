import { TemperatureManager } from "./TemperatureManager";

export class TemperatureManagerFake extends TemperatureManager {
  async getCurrentTemperature(location) {
    return 24.5;
  }
}
