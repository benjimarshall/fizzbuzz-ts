import {fizzbuzz, fizzbuzzGetResponse} from './index';
import * as _ from 'lodash';

test('Bang on 7', () => {
    expect(fizzbuzzGetResponse(7)).toBe('Bang');
});

test('8 on 8', () => {
    expect(fizzbuzzGetResponse(8)).toBe('8');
});

test('Fizz on 9', () => {
    expect(fizzbuzzGetResponse(9)).toBe('Fizz');
});

test('Buzz on 10', () => {
    expect(fizzbuzzGetResponse(10)).toBe('Buzz');
});

test('FizzBuzz on 15', () => {
    expect(fizzbuzzGetResponse(15)).toBe('FizzBuzz');
});

test('FezzBuzz on 65', () => {
    expect(fizzbuzzGetResponse(65)).toBe('FezzBuzz');
});

test('Bong on 165', () => {
    expect(fizzbuzzGetResponse(165)).toBe('Bong');
});

test('FizzFezzBuzz on 195', () => {
    expect(fizzbuzzGetResponse(195)).toBe('FizzFezzBuzz');
});

test('BuzzFizz on 255', () => {
    expect(fizzbuzzGetResponse(255)).toBe('BuzzFizz');
});

function hasReplacingFactor(n: number): boolean {
    return n % 3 === 0 ||
           n % 5 === 0 ||
           n % 7 === 0 ||
           n % 11 === 0 ||
           n % 13 === 0;
}

test('Random number without a replacing factor gives the number', () => {
    let testNumber;
    do {
        testNumber = _.random(0, 1000000);
    } while (hasReplacingFactor(testNumber));

    expect(fizzbuzzGetResponse(testNumber)).toBe(testNumber.toString());
});

test('Random number with 11 as a factor and not 13 gives Bong', () => {
    let testNumber;
    do {
        testNumber = _.random(0, 1000000);
    } while (testNumber % 13 === 0);
    testNumber = testNumber * 11;

    expect(fizzbuzzGetResponse(testNumber)).toBe('Bong');
});

test('Run Fizzbuzz for 20', () => {
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
