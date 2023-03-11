// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25];

console.log('Sorted Age')
ages.sort();
console.log(ages);

console.log('Min age');
const min = ages[0]
console.log(min);

console.log('Max age');
const max = ages[ages.length - 1]
console.log(max);


console.log('Median age')
const no_of_elements = ages.length;
let median = 0;
if ( no_of_elements % 2 == 0){
    const lastInx = no_of_elements - 1;
    const middleInx2 = Math.ceil(lastInx / 2);
    const middleInx1 = Math.floor(lastInx/2);
    median = (ages[middleInx2] + ages[middleInx1])/2;
}else{
    const lastInx = no_of_elements - 1;
    const middleInx = lastInx/2;
    median = ages[middleInx]/2;
}

console.log('Median is');
console.log(median);

console.log('Average age');

const sum = ages.reduce((sum, e)=>{
    return sum + e;
}, 0)

const avg = sum/ages.length
console.log(avg);

console.log('Range of Ages');
console.log(max - min);

console.log('Compare the value of (min - average) and (max - average), use abs() method')

const comp = Math.abs((max - avg) - Math.abs(min - avg)) ;
console.log(`Comparison is ${comp}`)
