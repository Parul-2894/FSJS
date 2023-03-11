// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const arrVal = ["ineuron","geeksforgeeks", "pw skills", "stackoverflow", "pw skills"];

const last_position_of_pw = arrVal.lastIndexOf("pw skills");

const arrValRev = arrVal.reverse();
const index_from_reveresd_array = arrValRev.lastIndexOf("pw skills")

const first_position_of_pw = (arrVal.length - 1) - index_from_reveresd_array

console.log(`First occurences ${first_position_of_pw}`)
console.log(`Last occurences ${last_position_of_pw}`)

