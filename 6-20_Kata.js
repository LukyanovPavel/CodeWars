//6 Kata name: Fake Binary
function fakeBin(x){
    return  x.split('').map(item => item < 5 ? 0 : 1).join('');
}

//7 BASIC: Making Six Toast
function sixToast(num) {
    return Math.abs(num - 6);
}

//8 BASIC: Sentence Smash
function smash (words) {
    return words.join(' ')
};

//9 BASIC: MakeUpperCase
function makeUpperCase(str) {
    return str.toUpperCase();
}

//10 BASIC: Thinkful - Logic Drills: Traffic light
function updateLight(current) {
    switch(current){
        case 'green':
            return 'yellow'
            break;
        case 'yellow':
            return 'red'
            break;
        case 'red':
            return 'green'
            break;
    }
}

//11 BASIC: Grasshopper - Check for factor
function checkForFactor (base, factor) {
    return base % factor == 0 ? true : false;
}

//12 BASIC: Quarter of the year
const quarterOf = (month) => {
    if (month < 4) {
        return 1;
    } else if(month < 7) {
        return 2;
    } else if(month < 10) {
        return 3;
    } else if(month <= 12) {
        return 4;
    }
}

//13 BASIC: Grasshopper - Grade book
function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3)/3;

    if (score >= 90 && score <= 100) {
        return 'A';
    }
    if (score >= 80 && score <= 90) {
        return 'B';
    }
    if (score >= 70 && score <= 80) {
        return 'C';
    }
    if (score >= 60 && score <= 70) {
        return 'D';
    }
    if (score >= 0 && score <= 60) {
        return 'F';
    }
}

//14 BASIC: Will there be enough space?
function enough(cap, on, wait) {
    let freePlaces = cap - on;
    let num = freePlaces - wait;
    return Math.sign(num) == -1 ? -num : 0;
}

//15 BASIC: Beginner Series #1 School Paperwork
function paperwork(n, m) {
    if (n < 0 || m < 0) return 0;
    return n * m;
}

//16 BASIC: Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld * 2) - dadYearsOld);
}

//17 BASIC: Vowel remover
function shortcut (string) {
    return string.split('').map(item => {
        return (item == 'a'|| item == 'e'|| item == 'i' || item == 'o' || item == 'u') ? item = '' : item;
    }).join('');
}

//18 BASIC: Square(n) Sum
function squareSum(numbers){
    return numbers.reduce((num, item) => {
        return num + item * item;
    },0);
}


//19 BASIC: ASCII Total
function uniTotal (string) {
    if(string == '') return 0;
    return string.split('').reduce((num, item) => num += item.charCodeAt(0),0);
}


//20 BASIC: Calculate BMI
function bmi(weight, height) {
    let bmi = weight/height ** 2;
    if (bmi <= 18.5) {
        return "Underweight";
    }else if (bmi <= 25) {
        return "Normal";
    }else if (bmi <= 30) {
        return "Overweight";
    }else if (bmi > 30) {
        return "Obese";
    }
}