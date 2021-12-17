const mult = require('../src/mutiply');

it('should calculate mutliplication of two number',()=>{
    const result = mult(2,4);
    expect(result).toBe(8);
})