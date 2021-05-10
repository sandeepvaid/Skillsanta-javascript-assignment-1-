function difference(arr1,arr2){
    let arr =[]
    for (let i=0; i<arr1.length;i++){
        if (arr.includes(arr1[i])){
            pass = true
        }else{
            arr.push(arr1[i])
        }
    }
    
    for (let i=0; i<arr2.length;i++){
        if (arr.includes(arr2[i])){
            pass = true
        }else{
            arr.push(arr2[i])
        }
    }
    document.write(arr)
}


difference([1,2,3,4,4,5],[10,100,20,10,2,3])