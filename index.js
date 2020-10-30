function fizzBuzz(n) {
    let responses = [];

    if (n % 3 == 0) {
        responses.push("Fizz");
    }

    if (n % 5 == 0) {
        responses.push("Buzz");
    }

    if (n % 7 == 0) {
        responses.push("Bang");
    }

    if (n % 11 == 0) {
        responses = ["Bong"];
    }

    if (n % 13 == 0) {
        let insertionPoint = responses.findIndex(s => s.charAt(0) == 'B');
        insertionPoint = insertionPoint != -1 ? insertionPoint : responses.length;
        responses.splice(insertionPoint, 0, "Fezz");
    }

    if (n % 17 == 0) {
        responses.reverse();
    }

    let result = responses.join("");
    result = result != "" ? result : n;
    return result
}

for (let i = 1; i < 500; i++) {
    console.log(fizzBuzz(i));
}
