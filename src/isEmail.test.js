import { expect, it } from "vitest";
import { isEmail } from "./isEmail";

it("renders correctly", () => {
  const anEmail = "example@exmaple.com";

  const result = isEmail(anEmail);

  expect(result).toBeTruthy();
});
