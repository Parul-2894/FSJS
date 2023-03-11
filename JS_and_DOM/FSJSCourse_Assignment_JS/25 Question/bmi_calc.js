





const checkWeightGroup = function(weight, height){
    const  bmi = weight_kg/(height*height);
    
    if (bmi > 30){
        return "Obese";
    }
    else if(bmi > 25){
        return "Overweight";
    }
    else if(bmi > 18.5){
        return "Normal Weight";
    }else{
        return "Underweight";
    }
}

const weight_kg = 75;
const height_meters = 1.65;


console.log('Weight Group is')
console.log(checkWeightGroup(weight_kg, height_meters));