const primeNumber = (lowerLimit, upperLimit) => {
    const primerNumbers: number[] = [];

    for (let number = lowerLimit; number <= upperLimit; number++) {
        if (number == 0 || number == 1 || number == 4) {
            console.log(`${number} is not a prime number`);
            break;
        }
        for (let iteration = 2; iteration < number/2; number++) {
            if ( number % iteration == 0 ) {
                console.log(`${number} is not a prime number`);
                break;
            }
            console.log(`${number} is a prime number`);
            primerNumbers.push(number);
        }
        
        return primerNumbers
    }
}