const thumbWar = require("../thumb-war");
const utils = require("../utils");

jest.mock("../utils");

test("return winner", () => {
  const winner = thumbWar("zoro", "luffy");
  expect(winner).toBe("zoro");
  expect(utils.getWinner.mock.calls).toEqual([
    ["zoro", "luffy"],
    ["zoro", "luffy"],
  ]);

  // reset our mock function to the original state
  // clearing out the calls
  utils.getWinner.mockReset();
});
