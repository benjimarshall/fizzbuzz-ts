import * as _ from "lodash";

function insertFezz(responseArray: string[]): string[] {
    let bIndex = responseArray.findIndex(response => response.charAt(0) == "B");
    let insertionPoint = bIndex !== -1 ? bIndex : responseArray.length;

    return [...responseArray.slice(0, insertionPoint), "Fezz", ...responseArray.slice(insertionPoint)]  ;
}

function fizzbuzz(limit: number): string[] {
    return _.range(1, limit).map(i => {
                let response3 = i % 3 === 0 ? "Fizz" : "";
                let response5 = i % 5 === 0 ? "Buzz" : "";
                let response7 = i % 7 === 0 ? "Bang" : "";
                
                let responses11 = i % 11 === 0 ? ["Bong"] : [response3, response5, response7];
                let responses13 = i % 13 === 0 ? insertFezz(responses11) : responses11;
                let response17 = i % 17 === 0 ? responses13.slice().reverse() : responses13;
                
                return response17.join("");
            })
            .map((response, i) => response === "" ? (i + 1).toString() : response);
}

function playFizzBuzz() {
    var responses = fizzbuzz(250);

    responses.forEach(element => {
        console.log(element);
    });
}

playFizzBuzz();
