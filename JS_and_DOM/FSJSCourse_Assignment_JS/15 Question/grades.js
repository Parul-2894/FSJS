// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const grade = function(score){
    if(score >=80 && score<=100){
        return 'A';
    }

    if(score >=70  && score<=79){
        return 'B';
    }

    if(score>=60 && score<=69){
        return 'C';
    }

    if(score>=50 && score<=59){
        return 'D'
    }

    else{
        return 'F'
    }
}

const score = 80;
const score1 = 75;
const score2 = 65;
const score3 = 58;
const score4 = 48;

console.log(`${score} -> ${grade(score)}`);
console.log(`${score1} -> ${grade(score1)}`);
console.log(`${score2} -> ${grade(score2)}`);
console.log(`${score3} -> ${grade(score3)}`);
console.log(`${score4} -> ${grade(score4)}`);