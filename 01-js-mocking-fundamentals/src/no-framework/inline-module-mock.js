const utilsPath = require.resolve("../utils");
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  // exports is our mock
  exports: {
    getWinner: fn((p1, p2) => p1),
  },
};

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = (newImpl) => (impl = newImpl);
  return mockFn;
}

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const winner = thumbWar("zoro", "luffy");
assert.strictEqual(winner, "zoro");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["zoro", "luffy"],
  ["zoro", "luffy"],
]);

// cleanup
delete require.cache[utilsPath];
