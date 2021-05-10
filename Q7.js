function Strip_tags(){
    let str = prompt("Enter a string having html and xml tags: ");
    if ((str===null) || (str==='')){
        return false;
    }else{
        str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }
    
}

let ans = Strip_tags()
document.write(ans)