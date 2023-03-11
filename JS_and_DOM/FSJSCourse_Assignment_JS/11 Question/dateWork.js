// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date_today = new Date();
console.log('Current Year is')
console.log(date_today.getFullYear());

console.log('Current Month is')
console.log(date_today.getMonth() + 1);

console.log('Current Date is')
console.log(date_today.getDate());

console.log('Current Hour is')
console.log(date_today.getHours());

console.log('Current Minute is')
console.log(date_today.getMinutes());

console.log('seconds elapsed from January 1, 1970');
console.log(Date.now()/1000)