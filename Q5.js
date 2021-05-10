let string = prompt("Enter your name: ")    //mom
let len = string.length       //Here we check the length of the string.
// document.write(len)
let rev_str=''              //Now we create an empty string there.
for (let i=0; i<len;i++){         //Now we loop through our string and take each character one by one .
    rev_str = string[i] + rev_str   //Now here we take each character and append it one by one to our empty string in reverse fashion
}
document.write(rev_str,'<br>')  //here we get the reverse string as mom.

Is_Palindrome(string,rev_str)  //Now we pass these two strings in our function to check Is_Palindrome or not .

function Is_Palindrome(user_string,rev_str){
    if (user_string == rev_str){          //In that conditional if user and reverse string is equal then it is paindrome
        document.write(user_string," is palindrome")
    }else{
        document.write(user_string,' is not palindrome')//else it is not a palindrome
    }
}