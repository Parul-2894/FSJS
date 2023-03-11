
const distributeEvenAndOddBetween = function(start_num, end_num){
    let even = []
    let odd  = []
    for(let i = start_num ; i<=end_num; i++){
        if (i % 2 == 0){
            even.push(i)
        }else{
            odd.push(i)
        }
    }

    return {
        even: even,
        odd: odd
    }
}

const start_num = 0;
const end_num = 100
const even_odd_list = distributeEvenAndOddBetween(start_num, end_num);

console.log('Even List is;')
console.log(even_odd_list['even']);

console.log('Odd list is;')
console.log(even_odd_list['odd']);

