module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  if (item.enhancement <= 14 && item.durability > 25) {
    item.enhancement++;
    item.displayName = `[${generateName(item.enhancement)}] ${item.name}`;
    return item;
  }
  if (item.enhancement >= 15 && item.durability > 10) {
    item.enhancement++;
    item.displayName = `[${generateName(item.enhancement)}] ${item.name}`;
    return item;
  }
  return "Item durability too low";
}

function fail(item) {
  if (item.type === "armor") {
    if (item.enhancement < 5) {
      return "You cannot fail, your enhancement too low";
    } else {
      if (item.enhancement >= 5 && item.enhancement <= 14) {
        item.durability = item.durability - 5;
        return item;
      } else {
        item.durability = item.durability - 10;
        item.durability > 16 ? item.enhancement-- : item.enhancement;
        item.displayName = `[${generateName(item.enhancement)}] ${item.name}`;
        return item;
      }
    }
  } else if (item.type === "weapon") {
    if (item.enhancement < 7) {
      return "You cannot fail, your enhancement too low";
    } else {
      if (item.enhancement >= 5 && item.enhancement <= 14) {
        item.durability = item.durability - 5;
        return item;
      } else {
        item.durability = item.durability - 10;
        item.durability > 16 ? item.enhancement-- : item.enhancement;
        item.displayName = `[${generateName(item.enhancement)}] ${item.name}`;
        return item;
      }
    }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function generateName(level) {
  if (level === 0) {
    return "";
  } else if (level > 0 && level < 16) {
    return `+${level}`;
  } else {
    switch (level) {
      case 16:
        return "PRI";

      case 17:
        return "DUO";

      case 18:
        return "TRI";

      case 19:
        return "TET";

      case 20:
        return "PEN";
    }
  }
}
