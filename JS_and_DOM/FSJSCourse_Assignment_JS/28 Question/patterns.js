// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****


const patternA = function(num){
    for(let i = 1 ; i <= num; i++){
        console.log('*'.repeat(i));
    }
}

const patternB = function(num){
    for(let i = 1; i<=num ; i++){
        console.log('*'.repeat(num))
    }
}

const patternC = function(num){
    const last_list_num = 2*(num-1) + 1;
    for(let i = 0; i < num; i++){
        console.log(' '.repeat((last_list_num - (2*i + 1))/2) + '*'.repeat(2*i + 1));
    }
}

console.log('Pattern A');
patternA(3);

console.log('Pattern B');
patternB(3);

console.log('Pattern C');
patternC(10);
