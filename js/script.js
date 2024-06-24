function makeCounter() {
    let count = 0;

    return () => {
        count++;
        return count;
    }
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter1()); // 3