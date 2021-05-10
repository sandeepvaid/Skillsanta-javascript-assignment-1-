
let number = prompt("Enter numbers separated by space");
let arr=[]
let str = number.split(" ")
str.forEach(convert_into_array)  //Here we pass convert_into_array function as an argument .

function convert_into_array(item) {
    arr.push(item);
  
}
document.write(arr)
