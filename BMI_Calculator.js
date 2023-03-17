//Body Mass Index calculator

function bmiCalculator(weight, height){
//The first parameter should be the weight and the second should be the height. 
    var bmi = weight/(height*height);
    return Math.round(bmi);
}
var bmi = bmiCalculator(65,1.8);
console.log(bmi);



//

