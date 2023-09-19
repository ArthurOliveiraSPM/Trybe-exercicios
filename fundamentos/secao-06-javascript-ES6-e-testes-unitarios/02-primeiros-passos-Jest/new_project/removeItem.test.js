// loginValidation.test.js
const removeItem = require('./removeItem.js');

describe('Teste para exercicios', () => {
    it('Verifica remove item esperado, retirando 3',()=>{
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
        
    })
    it('Verifica se não retorna 1,2,3,4',() => {
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })
    it('Verifica remove item esperado retirando 5',()=>{
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})