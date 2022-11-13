// 1.
// types by inference
export const str = 'hello world';
console.log(str);

// 2.
// types by inference
const user = {
    name: 'rod',
    id: 1
}
// store infered type in a UserType
type UserType = typeof user

// 3.
// however interface is preferred unless specific type is neccesary
const newUser: UserType = {
    name: 'newUser',
    id: 2,
    // color: 'blue'
    // * Object literal may only specify known properties, *
    // and 'color' does not exist in type
}

// 4. Declare type on array
const arrNums: number[] = [43]
const arrStr: string[] = ['foo','bar']




interface ObjFields {
    name?: string,
    id?: number,
    color?: string
}

const obj: ObjFields = {}
obj.name = user.name
console.log(obj)

function createObj(name: string,color: string){
    const obj: ObjFields = {}
    obj.name = name
    obj.color = color
    return obj
}

var newObj = createObj('jack','red')
console.log(newObj)

// * Classes 
interface User {
    name: string;
    id: number;
  }
   
  class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
   
  const userAccount: User = new UserAccount("Murphy", 1);
  console.log(userAccount);


  function wrapArry(str: string | string[]) {
    if(typeof str === "string") {
        return str
    }
    return str
  }

  const strTest = wrapArry('hello')
  const strTest2 = wrapArry(['hello', 'yes'])
  console.log(strTest)
  console.log(strTest2)

//   interface ArrT {
//     arr: ObjType[]
//   }

//   interface ObjType {
//     id: number,
//     name: string, 
//     todos: string[]
//   }


type ObjectType = {
    name: string
}

  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjectWithNameArray = Array<ObjectType>;
  type ObjectWithArrObj = Array<ObjectType>;

//   const arr: ObjectWithNameArray = [{name: 'jim'}]
//   console.log(arr)


  interface TestArr {
    arr: Array<Type>
  }

  interface Type { 
    str: string
  }

  interface Properties {
    id: number,
    todos: string[],
  }

  const arrTodos: Array<Properties> = [{id: 1, todos: ['one','two','three']}]
  console.log(arrTodos)


  interface StrProps {
    str: string
  }

  let strValue: string = 'hello'

  console.log('HELLO'.toLowerCase())

  function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  

  function greeting(person: string, date: string) {
    console.log(`Hello ${person}, today is ${date}!`);
  }
   
  greet("Brendan", new Date());
  greeting("Mike", 'nov 13th');

//   greeting("Mike", 13);
//   tsc --noEmitOnError types.ts
//   typescript will not compile to js if errors occur

// *** Compiling notes ***
// Running with --target es2015 changes TypeScript to target ECMAScript 2015, 
// meaning code should be able to run wherever ECMAScript 2015 is supported. 
// So running tsc --target es2015 hello.ts gives us the following output:
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());

//  *** Type checking Strictness ***
//  TypeScript has several type-checking strictness flags that can be turned on or off, 
//  and all of our examples will be written with all of them enabled unless otherwise stated.
//  The strict flag in the CLI, or "strict": true in a tsconfig.json toggles them all on 
//  simultaneously, but we can opt out of them individually. The two biggest ones you should
//  know about are noImplicitAny and strictNullChecks.

//   const arr: ArrT = [{id: 1, name: 'foo', todos: ['string']}]