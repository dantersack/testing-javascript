const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("return winner", () => {
  const originalGetWinner = utils.getWinner;

  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("zoro", "luffy");
  expect(winner).toBe("zoro");
  // expect(utils.getWinner).toHaveBeenCalledTimes(2);
  // expect(utils.getWinner).toHaveBeenCalledWith("zoro", "luffy");
  // expect(utils.getWinner).toHaveBeenNthCalledWith(1, "zoro", "luffy");
  // expect(utils.getWinner).toHaveBeenNthCalledWith(2, "zoro", "luffy");
  expect(utils.getWinner.mock.calls).toEqual([
    ["zoro", "luffy"],
    ["zoro", "luffy"],
  ]);

  utils.getWinner = originalGetWinner;
});
