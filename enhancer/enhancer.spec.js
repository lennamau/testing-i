const { success, fail, repair } = require('./enhancer')

describe('repair', () => {
    it('sets durability to 100', () =>{
        const item = {name: 'sword', type: 'weapon', durability: 80, enhancement:5}
        expect(repair(item)).toEqual({name: 'sword', type: 'weapon', durability: 100, enhancement: 5})
    })
})

describe('success', () => {
  
})
