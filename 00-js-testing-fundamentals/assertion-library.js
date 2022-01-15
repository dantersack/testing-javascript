function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}.`);
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
    toBeLessThan(expected) {},
  };
}

module.exports = expect;
