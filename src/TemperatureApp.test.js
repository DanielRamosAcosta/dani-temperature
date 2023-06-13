import { describe, it, expect } from "vitest";
import { TemperatureApp } from "./TemperatureApp.js";
import { LocationManagerFake } from "./services/LocationManagerFake.js";
import { TemperatureManagerFake } from "./services/TemperatureManagerFake.js";

describe("GetCurrentTemperature", () => {
  it("should return the current temperature", async () => {
    const app = new TemperatureApp(
      new LocationManagerFake(),
      new TemperatureManagerFake()
    );

    const temperature = await app.getCurrentTemperature();

    expect(temperature).toBe(76.1);
  });
});
