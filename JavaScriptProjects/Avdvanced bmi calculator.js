function bmiCalculator (weight, height) {
    var Bmi = Math.round(weight/(height**2));
    if(Bmi <18.5)
        return "Your BMI is <" + Bmi + ">, so you are underweight."
    if(Bmi <+24.9)
        return "Your BMI is <" + Bmi + ">, so you have a normal weight."
    return "Your BMI is <" + Bmi + ">, so you are overweight"
}