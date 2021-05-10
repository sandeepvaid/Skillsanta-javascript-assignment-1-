function To_Get_Age() {
    var dob = prompt("Enter DOB in dd/mm/yyyy format ") //Here we take user dob in a given format . eg--> 29/03/2000
    dob = dob.split('/')  //Now we split element in accordance of / and we get-->[dd,mm,yyyy]
    let year = dob[2]  //As youncan see year is at 2nd index and we acccess that year.
    year=parseInt(year) //Here year is of string type and thats why we convert it into the integer .
    let curr_year = new Date()  //With that function we get info. about  current data by usinf that function.-->2020
    curr_year = curr_year.getFullYear()  //now we fetch current year from that function ---> 20
    let age = curr_year - year   //and we subtract that and we get the age of the person .
    return age  //Here we return the age .
}

function To_Check_For_Vaccine(age){
        if (age>=18 && age<=44){  //Now we check for the condition. and 20 is >=18 and <=44 and condition is true and i register myself for vaccine.
            window.open("https://selfregistration.cowin.gov.in")//Be safe and healthy 
            
        }else{
            document.write("You are not eligible now to take vaccine")  //Not under the given age criteria
        }
}

let age = To_Get_Age();
To_Check_For_Vaccine(age)