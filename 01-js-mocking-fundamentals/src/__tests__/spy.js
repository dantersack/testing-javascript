const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("return winner", () => {
  jest.spyOn(utils, "getWinner");

  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar("zoro", "luffy");
  expect(winner).toBe("zoro");
  expect(utils.getWinner.mock.calls).toEqual([
    ["zoro", "luffy"],
    ["zoro", "luffy"],
  ]);

  utils.getWinner.mockRestore();
});
