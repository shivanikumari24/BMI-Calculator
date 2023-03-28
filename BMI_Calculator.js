//Body Mass Index calculator

function bmiCalculator(weight, height){
//The first parameter should be the weight and the second should be the height. 
    var bmi = weight/(height*height);
    return Math.round(bmi);
}
var bmi = bmiCalculator(65,1.8);
console.log(bmi);



//2nd method by using function
var interpretation="";
function bmiCalculator(weight, height){
    var bmi = weight / (height*height);

    if (bmi < 18.5) {
       interpretation ="Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi +", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

   return interpretation;
}
console.log(interpretation)


