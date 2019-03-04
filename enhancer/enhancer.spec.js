const { success, fail, repair } = require("./enhancer");

describe("repair", () => {
  it("sets durability to 100", () => {
    const item = {
      name: "sword",
      type: "weapon",
      durability: 80,
      enhancement: 5
    };
    expect(repair(item)).toEqual({
      name: "sword",
      type: "weapon",
      durability: 100,
      enhancement: 5
    });
  });
});

describe("success", () => {
  it("increments enhancement and sets name", () => {
    const item = {
      name: "sword",
      type: "weapon",
      durability: 80,
      enhancement: 5
    };
    expect(success(item)).toEqual({
      name: "[+6] sword",
      type: "weapon",
      durability: 80,
      enhancement: 6
    });
  });
});
