function insertFezz(arr: string[]): string[] {
    let bIndex = arr.findIndex(response => response.charAt(0) == "B");
    let insertionPoint = bIndex != -1 ? bIndex : arr.length;

    return arr.slice(0, insertionPoint).concat("Fezz").concat(arr.slice(insertionPoint));
}

function fizzbuzz(limit: number): string[] {
    return Array(limit + 1)
        .fill([])
        .map((a, i) => i %  3 === 0 ? a.concat("Fizz") : a)
        .map((a, i) => i %  5 === 0 ? a.concat("Buzz") : a)
        .map((a, i) => i %  7 === 0 ? a.concat("Bang") : a)
        .map((a, i) => i % 11 === 0 ? ["Bong"] : a)
        .map((a, i) => i % 13 === 0 ? insertFezz(a) : a)
        .map((a, i) => i % 17 === 0 ? a.slice().reverse() : a)
        .map(responses => responses.join(""))
        .map((response, i) => response == "" ? i.toString() : response)
        .slice(1); // Remove the unwanted 0 of Fizzbuzz
}

function playFizzBuzz() {
    var responses = fizzbuzz(250);

    responses.forEach(element => {
        console.log(element);
    });
}

playFizzBuzz();
