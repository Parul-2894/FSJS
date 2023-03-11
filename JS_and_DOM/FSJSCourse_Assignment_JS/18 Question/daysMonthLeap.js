const daysInAMonth = function(month, isLeap = false){
    const thirtyOneDaysMonths = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
    const thirtyDaysMonths = ['November', 'April', 'June', 'September'];
    const febDaysTwentyEight = ['February']
    const febDaysTwentyNine = ['February']

    if(thirtyOneDaysMonths.includes(month)){
        return "31";
    }

    if(thirtyDaysMonths.includes(month)){
        return "30";
    }

    if(isLeap && febDaysTwentyNine.includes(month)){
        return "29";
    }

    if(febDaysTwentyEight.includes(month)){
        return "28";
    }
}

const month = 'February';
console.log(` ${month} has ${daysInAMonth(month, true)} days`);