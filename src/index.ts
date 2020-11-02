import * as _ from 'lodash';

function insertFezz(responseArray: string[]): string[] {
    const bIndex = responseArray.findIndex(response => response.startsWith('B'));
    const insertionPoint = bIndex !== -1 ? bIndex : responseArray.length;

    return [...responseArray.slice(0, insertionPoint), 'Fezz', ...responseArray.slice(insertionPoint)];
}

function fizzbuzz(limit: number): string[] {
    return _.range(1, limit).map(fizzbuzzGetResponse)
        .map((response, i) => response === '' ? (i + 1).toString() : response);
}

function fizzbuzzGetResponse(i: number): string {
    const response3 = i % 3 === 0 ? 'Fizz' : '';
    const response5 = i % 5 === 0 ? 'Buzz' : '';
    const response7 = i % 7 === 0 ? 'Bang' : '';

    const responses11 = i % 11 === 0 ? ['Bong'] : [response3, response5, response7];
    const responses13 = i % 13 === 0 ? insertFezz(responses11) : responses11;
    const response17 = i % 17 === 0 ? responses13.slice().reverse() : responses13;

    return response17.join('');
}

function playFizzBuzz(): void {
    const responses = fizzbuzz(250);

    responses.forEach(element => {
        console.log(element);
    });
}

playFizzBuzz();
