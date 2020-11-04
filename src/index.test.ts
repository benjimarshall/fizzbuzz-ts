import { fizzbuzz, fizzbuzzGetResponse } from './index';

describe.each([
    [1, '1'],
    [2, '2'],
    [7, 'Bang'],
    [8, '8'],
    [9, 'Fizz'],
    [10, 'Buzz'],
    [15, 'FizzBuzz'],
    [29, '29'],
    [65, 'FezzBuzz'],
    [165, 'Bong'],
    [195, 'FizzFezzBuzz'],
    [255, 'BuzzFizz'],
    [264, 'Bong'],
    [374, 'Bong'],
])('Individual FizzBuzz response function', (input: number, expected: string) => {
    test(`should output "${expected}" when input is ${input}`, () => {
        expect(fizzbuzzGetResponse(input)).toBe(expected);
    });
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
