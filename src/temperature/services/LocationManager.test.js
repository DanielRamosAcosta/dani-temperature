import { describe, it, expect } from "vitest";

import { LocationManager } from "./LocationManager.js";

describe("LocationManager", () => {
  it("should return the current location", async () => {
    const locationManager = new LocationManager();

    const location = await locationManager.getCurrentLocation();

    expect(location.latitude).toBeGreaterThan(-45);
    expect(location.latitude).toBeLessThan(45);
    expect(location.longitude).toBeGreaterThan(-90);
    expect(location.longitude).toBeLessThan(90);
  });
});
