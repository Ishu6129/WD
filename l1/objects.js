var obj={
    name:"Ishu",
    age:19
}
console.log(obj)
console.log(obj.name)
console.log(obj['name'])
obj.age=20;
console.log(obj['age'])
Object.freeze(obj);// Now we no longer can change the object
obj.age=19;
console.log(obj['age']) //20