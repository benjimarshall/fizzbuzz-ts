import { fizzbuzz, fizzbuzzGetResponse } from './index';
import * as _ from 'lodash';

test('Should output "Bang" when input is 7', () => {
    expect(fizzbuzzGetResponse(7)).toBe('Bang');
});

test('Should output "8" when input is 8', () => {
    expect(fizzbuzzGetResponse(8)).toBe('8');
});

test('Should output "Fizz" when input is 9', () => {
    expect(fizzbuzzGetResponse(9)).toBe('Fizz');
});

test('Should output "Buzz" when input is 10', () => {
    expect(fizzbuzzGetResponse(10)).toBe('Buzz');
});

test('Should output "FizzBuzz" when input is 15', () => {
    expect(fizzbuzzGetResponse(15)).toBe('FizzBuzz');
});

test('Should output "FezzBuzz" when input is 65', () => {
    expect(fizzbuzzGetResponse(65)).toBe('FezzBuzz');
});

test('Should output "Bong" when input is 165', () => {
    expect(fizzbuzzGetResponse(165)).toBe('Bong');
});

test('Should output "FizzFezzBuzz" when input is 195', () => {
    expect(fizzbuzzGetResponse(195)).toBe('FizzFezzBuzz');
});

test('Should output "BuzzFizz" when input is 255', () => {
    expect(fizzbuzzGetResponse(255)).toBe('BuzzFizz');
});

function hasReplacingFactor(n: number): boolean {
    return n % 3 === 0 ||
           n % 5 === 0 ||
           n % 7 === 0 ||
           n % 11 === 0 ||
           n % 13 === 0;
}

test('Should output the number when input is a random number without a replacing factor', () => {
    let testNumber;
    do {
        testNumber = _.random(0, 1000000);
    } while (hasReplacingFactor(testNumber));

    expect(fizzbuzzGetResponse(testNumber)).toBe(testNumber.toString());
});

test('Should output "Bong" when input is a random number with 11 as a factor and not 13', () => {
    let testNumber;
    do {
        testNumber = _.random(0, 1000000);
    } while (testNumber % 13 === 0);
    testNumber = testNumber * 11;

    expect(fizzbuzzGetResponse(testNumber)).toBe('Bong');
});

test('Should play Fizzbuzz correctly up to 20', () => {
    expect(fizzbuzz(20)).toEqual([
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        'Bang',
        '8',
        'Fizz',
        'Buzz',
        'Bong',
        'Fizz',
        'Fezz',
        'Bang',
        'FizzBuzz',
        '16',
        '17',
        'Fizz',
        '19'
    ]);
});
