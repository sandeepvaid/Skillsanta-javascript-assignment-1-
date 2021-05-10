let temp = prompt("Enter the temperature")
let conv = prompt("Enter the conversion i.e F or C ")
conv.toLowerCase()
if (conv == 'F'){
    document.write(Celcius_to_Fahrenheit(temp))
}else {
    document.write(Fahrenheit_to_celcius(temp))
}

function Fahrenheit_to_celcius(temp) {
    celcius = (temp-32)*5/9
    return celcius
}

function Celcius_to_Fahrenheit(temp) {
    fahrenheit = (temp * 1.8) + 32
    return fahrenheit
}

//TEST CASE EXPLAINATION:-
//we take the temperature first as temp = 1
//Secondly,we take an input for the conversion you want i.e fahrenheit as f and Celcius as C.
//Then we check for a condition if it is F or C and according to that we call our function and use formaula.
//if temp = 1 and conv = c then we return -17.222222 celcius 