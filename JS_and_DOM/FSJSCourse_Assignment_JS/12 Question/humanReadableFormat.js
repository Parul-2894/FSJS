// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm


const convertToFormat  = function(date_val, format){
    const fullYear= date_val.getFullYear();

    const month = date_val.getMonth() + 1;
    const month_str =  month<10?(0 + String(month)):month

    const date_number = date_val.getDate(); 
    const date_val_str = date_number<10?(0 + String(date_number)):date_number

    const hours = date_val.getHours() 
    const hours_str = hours<10?(0 + String(hours)):hours

    const minutes = date_val.getMinutes();
    const minutes_str = minutes<10?(0 + String(minutes)):minutes 
    
    switch(format){
        case 'YYYY-MM-DD HH:mm':
            return `${fullYear}-${month_str}-${date_val_str} ${hours_str}:${minutes_str}`
        case 'DD-MM-YYYY HH:mm':
            return `${date_val_str}-${month_str}-${fullYear} ${hours_str}:${minutes_str}`
        case 'DD/MM/YYYY HH:mm':
            return `${date_val_str}/${month_str}/${fullYear} ${hours_str}:${minutes_str}`
    }


}


let now = new Date();
console.log(convertToFormat(now, 'YYYY-MM-DD HH:mm'))
console.log(convertToFormat(now, 'DD-MM-YYYY HH:mm'))
console.log(convertToFormat(now, 'DD/MM/YYYY HH:mm'))