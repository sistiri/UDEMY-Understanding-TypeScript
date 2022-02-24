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

// THE "KEYOF" CONSTRAINT

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({name: 'Max'}, 'name')


// GENERIC CLASSES

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1){
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Manu')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()
numberStorage.addItem(10)
numberStorage.addItem(20)
numberStorage.removeItem(20)
console.log(numberStorage.getItems())


// not working with objects as it works with primitive values
// const objectStorage = new DataStorage<object>()
// const maxObj = {name: 'Max'}
// objectStorage.addItem(maxObj)
// objectStorage.addItem({name: 'Manu'})
// objectStorage.removeItem({name: 'Max'})
// console.log(objectStorage.getItems())

