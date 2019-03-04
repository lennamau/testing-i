module.exports = {
  success,
  fail,
  repair
};

function success(item) {
    if(item.enhancement<= 14 && item.durability > 25){
        item.enhancement++;
        item.name = `[${generateName(item.enhancement)}] ${item.name}`;
        return item;
    }
  if(item.enhancement >= 15 && item.durability > 10) {
    item.enhancement++;
    item.name = `[${generateName(item.enhancement)}] ${item.name}`;
    return item;
  }
  return 'Item durability too low'
}

function fail(item) {}

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
