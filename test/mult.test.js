const mult = require('../src/mutiply');

it('should calculate mutliplication of two number',()=>{
    const result = mult(5,4);
    expect(result).toBe(20);
})