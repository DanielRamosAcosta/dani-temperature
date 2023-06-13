import { TemperatureApp } from "./TemperatureApp.js";
import { LocationManager } from "./services/LocationManager.js";
import { TemperatureManager } from "./services/TemperatureManager.js";

const app = new TemperatureApp(new LocationManager(), new TemperatureManager());

const temperature = await app.getCurrentTemperature();

console.log(temperature);
