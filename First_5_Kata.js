//1 Kata name: Rock Paper Scissors!
const rps = (p1, p2) => {
    if (p1 == 'rock' && p2 =='scissors') {
        return 'Player 1 won!'
    } else if (p1 == 'scissors' && p2 =='paper') {
        return 'Player 1 won!'
    } else if (p1 == 'paper' && p2 =='rock') {
        return 'Player 1 won!'
    } else if (p1 === p2) {
        return 'Draw!'
    } else {
        return 'Player 2 won!'
    }
}

//2 Kata name: DNA to RNA Conversion
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let string = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] != 'T') {
            string += dna[i];
        } else {
            string += 'U';
        }
    }
    return string;
}

//3 Kata name: Student's Final Grade
function finalGrade (exam, projects) {
    let finalScore = 0;
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    return 0;
}

//4 Kata name: Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
    let lowPrice = (normPrice * discount)/100;
    let holiday = hol/lowPrice;
    return Math.floor(holiday);
}

//5 Kata name: Well of Ideas - Easy Version
function well(x){
    let goodIdea = 0;
    x.forEach(element => {
        if (element == 'good') goodIdea++;
    });
    switch (goodIdea) {
        case 0:
            return 'Fail!';
            break;
        case 1:
        case 2:
            return 'Publish!';
            break;
        default:
            return 'I smell a series!';
            break;
    }
}