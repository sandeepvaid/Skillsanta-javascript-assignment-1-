function vowels(str){
    let vow =[0,0,0,0,0]

    for (let i=0; i<str.length;i++) {
        if (str[i].toLowerCase() == 'a'){
            vow[0] +=1
        }else if(str[i].toLowerCase()=='e'){
            vow[1] +=1
        }else if(str[i].toLowerCase() == 'i'){
            vow[2] +=1
        }else if(str[i].toLowerCase() == 'o'){
            vow[3] +=1
        }else if(str[i].toLowerCase() == 'u'){
            vow[4] +=1
        }
    }

    document.write('A :' ,vow[0],'<br>')
    document.write('E :' ,vow[1],'<br>')
    document.write('I :' ,vow[2],'<br>')
    document.write('O :' ,vow[3],'<br>')
    document.write('U :' ,vow[4],'<br>')
}

let str = prompt("Enter a string: ");
vowels(str)