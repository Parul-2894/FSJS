// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

const season = function(month){
    const autumn = ['September', 'October',  'November'];
    const winter = ['December', 'January', 'February'];
    const spring = ['March', 'April',  'May'];
    const summer = ['June', 'July',  'August'];

    if(autumn.includes(month)){
        return 'Autumn'
    }

    if(winter.includes(month)){
        return 'Winter'
    }

    if(spring.includes(month)){
        return 'Spring'
    }

    if(summer.includes(month)){
        return 'Summer'
    }
}


console.log(`October is ${season('October')}`);
console.log(`May is ${season('May')}`);
console.log(`February is ${season('February')}`);
console.log(`August is ${season('August')}`);