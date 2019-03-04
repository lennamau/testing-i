const { success, fail, repair } = require("./enhancer");

describe("repair()", () => {
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

describe("success()", () => {
  it("increments enhancement and sets name", () => {
    const item = {
      name: "sword",
      type: "weapon",
      durability: 80,
      enhancement: 5
    };
    const item2 = {
      name: "sword",
      type: "weapon",
      durability: 20,
      enhancement: 14
    };
    const item3 = {
      name: "sword",
      type: "weapon",
      durability: 80,
      enhancement: 15
    };
    expect(success(item)).toEqual({
      displayName: "[+6] sword",
      name: "sword",
      type: "weapon",
      durability: 80,
      enhancement: 6
    });
    expect(success(item2)).toEqual("Item durability too low");
    expect(success(item3)).toEqual({
      displayName: "[PRI] sword",
      name: "sword",
      type: "weapon",
      durability: 80,
      enhancement: 16
    });
  });
});

describe("fail()", () => {
  it("decreases durability based on a condition", () => {
    const weapon1 = {
      name: "sword",
      type: "weapon",
      durability: 80,
      enhancement: 3
    };
    const weapon2 = {
      name: "sword",
      type: "weapon",
      durability: 80,
      enhancement: 8
    };
    const weapon3 = {
      name: "sword",
      type: "weapon",
      durability: 80,
      enhancement: 17
    };
    const armor1 = {
      name: "helmet",
      type: "armor",
      durability: 80,
      enhancement: 3
    };
    const armor2 = {
      name: "helmet",
      type: "armor",
      durability: 80,
      enhancement: 8
    };
    const armor3 = {
      name: "helmet",
      type: "armor",
      durability: 80,
      enhancement: 17
    };
    expect(fail(weapon1)).toBe("You cannot fail, your enhancement too low");
    expect(fail(weapon2)).toEqual({
      name: "sword",
      type: "weapon",
      durability: 75,
      enhancement: 8
    });
    expect(fail(weapon3)).toEqual({
      displayName: "[PRI] sword",
      name: "sword",
      type: "weapon",
      durability: 70,
      enhancement: 16
    });
    expect(fail(armor1)).toBe("You cannot fail, your enhancement too low");
    expect(fail(armor2)).toEqual({
      name: "helmet",
      type: "armor",
      durability: 75,
      enhancement: 8
    });
    expect(fail(armor3)).toEqual({
      displayName: "[PRI] helmet",
      name: "helmet",
      type: "armor",
      durability: 70,
      enhancement: 16
    });
  });
});
