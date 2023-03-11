
function checkIfPrime(num){
    let devider = parseInt(num - 1);
    while(devider > 1){
        if (num % devider == 0){
            return false;
        }
        else{
            devider = devider - 1
        }
    }

    if (devider == 1){
        return true
    }
}

const collectPrimesIn = function(start_num, end_num){
    const prime = [];
    for(let i = start_num; i<=end_num; i++){
        if (checkIfPrime(i)){
            prime.push(i);
        }
    }
    return prime;
}
const start_num = 0;
const end_num = 100;
const prime = collectPrimesIn(start_num, end_num);

console.log(prime);


