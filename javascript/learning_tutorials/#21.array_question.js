    //1. 
    // doing in the chrome update will be here
    // not run this 
    arr=[10,3,5.2,30,2,5.3,5,250,7,10,3]

    a=3;
    arr.push(a)
    console.log(arr)

    for(let i in arr){
        console.log(arr[i])

    }
    console.log("the for of is")
    for(let i of arr){
        console.log(i)
    }

    let aa=arr.reduce((i,j)=>{
        return i+j
    })
    console.log("sum is ",aa)
    // 3.
    let filterarry=arr.filter((i)=>{
            return i%10==0
    })
    console.log(filterarry)
    for(let i of arr)
    {
        console.log("square is ",i,":", i*i)
    }

    ar=[1,2,3,4,5,6]
    let factorial=ar.reduce((i,j)=>{
        return i*j
    })
    console.log("THE FACTORIAL IS ",factorial)
