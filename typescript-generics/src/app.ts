// const names: Array<string> = ["Max", "Manuel"]; // string[]
// names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
// //   data.split(" ");
// });


function mergeOld(objA: object, objB: object) {
    return Object.assign(objA, objB)
}

console.log(mergeOld({name: 'Max'}, {age: 30}))
const mergedObjOld = mergeOld({name: 'Max'}, {age: 30})
// console.log(mergedObjOld.age);

function mergeNew<T extends object, U extends object >(objA: T, objB: U) {
    return Object.assign(objA, objB)
}
const mergedObjNew = mergeNew({name: 'Max', hobbies: ['Sports']}, {age: 30} )
console.log(mergedObjNew)
console.log(mergedObjNew.age);
console.log(mergedObjNew.name);

// ANOTHER GENERIC FUNCTION

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
   let descriptionText = 'Got no value!'
    if(element.length === 1) {
        descriptionText = 'Got 1 element.'
    } else if (element.length > 1) {
       descriptionText = 'Got ' + element.length + ' elements'
    }


    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'))
console.log(countAndDescribe(['Sports', 'Cooking']))

