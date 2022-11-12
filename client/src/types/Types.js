// types by inference
var str = 'hello world';
console.log(str);


const user = {
    name: 'rod',
    id: 1
}

const obj = {}
obj.name = user.name
console.log(obj)

function createObj(name,color){
    const obj = {}
    obj.name=name
    color.name=name
}

var newObj = createObj('jack','red')