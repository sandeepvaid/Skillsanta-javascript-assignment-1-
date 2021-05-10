let num1 = prompt("Enter 1st number")
let num2 = prompt("Enter 2nd number")
let num3 = prompt("Enter 3rd number")


//Now we make sure that number is integer and if not we do type conversion
num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

if (num1 > num2){
    if (num1 > num3 ){
        document.write(num1, ' is greater')
    }else{
        document.write(num3, ' is greater')
    }
}else{
    if (num2 > num3){
        document.write(num2, ' is greater')
    }else{
        document.write(num3, ' is greater')
    }

}

//TEST CASE
//num1 = 10
//num2 = 65
//num3 = 20

//Now we convert all number into integer.
//After that we check 1st condition num1 > num2 i.e false
//Now we check the 2nd block which is num2 > num3 i.e true and the num2 is printed.