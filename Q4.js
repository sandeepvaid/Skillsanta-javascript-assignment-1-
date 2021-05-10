function Integer_Check(){
    let value = prompt("Enter an integer: ");   //Here we take an integer from user example-->65
    value = parseInt(value);   //Now we convert that into integer
    if (value >=50 && value <=100){     //Here we check for the specified condition
        document.write("Integer is valid and lie b/w 50-100")  //if condition is true we print that statement
    }else{
        document.write("Integer is not under the range of  50-100")//otherwise we print that statement
    }
}

Integer_Check()