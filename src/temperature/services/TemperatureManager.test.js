import { describe, it, expect } from "vitest";

import { TemperatureManager } from "./TemperatureManager.js";

describe("TemperatureManager", () => {
  it("should return the current temperature", async () => {
    const temperatureManager = new TemperatureManager();

    const temperature = await temperatureManager.getCurrentTemperature({
      latitude: 28.483638,
      longitude: -16.31739,
    });

    expect(temperature).toBeGreaterThan(0);
    expect(temperature).toBeLessThan(40);
  });
});
