const {myFizzBuzz} = require('./myFizzBuzz.js')

describe('exercicio 2', () => {
    it('teste 1', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    it('teste 2', () => {
        expect(myFizzBuzz(3)).toBe('fizz')
    })
    it('teste 3', () => {
        expect(myFizzBuzz(5)).toBe('buzz')
    })
    it('teste 4', () => {
        expect(myFizzBuzz(1)).toBe(1)
    })
    it('teste 5', () => {
        expect(myFizzBuzz('repolho')).toBeFalsy()
    })
})