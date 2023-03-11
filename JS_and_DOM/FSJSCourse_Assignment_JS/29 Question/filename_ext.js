
const file_name = "index_form.js";

const findExtension = function(file_name){
    const file_parts = file_name.split('.')
    const ext = file_parts[file_parts.length - 1];
    return ext;
}

console.log(findExtension(file_name));