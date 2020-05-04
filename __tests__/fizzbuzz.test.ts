import { fizzbuzz } from '../src/fizzbuzz';

/*
    Describe is used to describe some feature for testing.
    Describe itself is not a test, but rather a tool for organizing
    related tests together. Note that you can nest describe calls to provide
    further structure to your tests.
*/
describe('fizzbuzz', () => {

    test(`returns 'fizz' when input is 3`, () => {
        expect(fizzbuzz(3)).toEqual('fizz');
    });

    // Case where returns 'buzz'
    test(`returns 'buzz' when input is 5`, () => {
        expect(fizzbuzz(5)).toEqual('buzz');
    })

    // Case where returns 'fizzbuzz'
    test(`returns 'fizzbuzz' when input 15`, () => {
        expect(fizzbuzz(15)).toEqual('fizzbuzz');
    });

    // Case where it returns the input value
    test(`returns 'you failed' when input input is not divisible by 3,5,15`, () => {
        expect(fizzbuzz(17)).toEqual(17);
    });

    // Case where input is 0
    test(`returns 'fizzbuzz' when input is 0`, () => {
        expect(fizzbuzz(0)).toEqual('fizzbuzz');
    });
});