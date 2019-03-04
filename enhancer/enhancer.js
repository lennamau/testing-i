module.exports = {
    success,
    fail,
    repair
}

function success(item) {
    item.enhancement++
    return item
}

function fail(item) {


}

function repair(item) {
    return ({...item, durability: 100})
}

function generateName(level) {
    if(level === 0) {
        return ''
    } else if(level> 0 && level < 16) {
       return `+${level}`
    }
}