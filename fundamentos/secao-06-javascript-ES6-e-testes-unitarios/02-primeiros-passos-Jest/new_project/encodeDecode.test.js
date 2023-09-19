const {encode,decode} = require('./encodeDecode.js')

describe('exercicio 3', () => {
    it('teste1',() => {
        expect(typeof decode).toEqual('function');
    })
    it('teste2',() => {
        expect(encode('a,e,i,o,u').toEqual('1,2,3,4,5'));
    })
    it('teste3',() => {
        expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
    })
    it('teste4',() => {
        expect(decode('6')).toBe('6');
        expect(encode('t')).toBe('t');
    })
    it('teste5',() => {
        expect(encode('teste').length).toBe(5);
    })
})