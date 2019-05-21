const assert    = require('chai').assert
const index     = require('../index')

// describe the index.js file
describe('index.js', function(){

    // describe sayHello() function
    describe('sayHello()', () => {
        // should return 'hello'
        it('sayHello() should return hello', function(){
            let result = index.sayHello()
            assert.equal(result, 'hello')
        })

        // result should be a string
        it('sayHello() should return type string', () => {
            let result = index.sayHello()
            assert.typeOf(result, 'string')
        })
    })

    // describe addition function
    describe('addition()', () => {
        // result should be above 5
        it('addition() should return val above 5', () => {
            let result = index.addition(5,5)
            assert.isAbove(result, 5)
        })

        // result should be of type number
        it('addition() should return type number', () => {
            let result = index.addition(5,5)
            assert.typeOf(result, 'number')
        })
    })
    
})