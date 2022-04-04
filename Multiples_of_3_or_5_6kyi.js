function solution(number) {
    let multipleSum = 0;

    for (let i = 1; i < number; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            multipleSum += i;
        }
    }
    return multipleSum;
}

console.log(solution(10))