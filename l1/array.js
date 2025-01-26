function fun(a,b,c,d){}
console.log("Length of function => "+fun.length) // means function is an object

var arr=[1,2,3,4,5]
console.log("Length of Array => "+arr.length)


// forEach

arr.forEach(function(v){
    console.log(v+".)");
})

//map

var newarr =arr.map(val=>{return val*2})
console.log("map => "+newarr);

// filter

var newarr =arr.filter(function(val){
    return val%2==0 ?true:false;    
})
console.log("filter => "+newarr);

// find 

var newarr =arr.find(function(val){
    if (val===2)return true;    
})

console.log("find => "+newarr);
console.log("indexOf => "+arr.indexOf(12))

