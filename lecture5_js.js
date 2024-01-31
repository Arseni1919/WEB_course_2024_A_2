// alert('Hello from JS file!');
//
// console.log('Hello from console!')
// console.error('this is ERROR!')
// console.warn('This is warning!')



// let age = 30;
// age += 1;
// console.log(age);

// const name = 'Jonh';
// console.log(name);
// const age = 30;
// console.log(age);
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z);
// z = 3
// console.log(typeof z);

// let x = 10;
// // x = x + 1;
// // x += 1;
// // x -= 1;
// // x *= 20;
// // x /= x;
// // x %= 30;
// x **= 20;
// console.log(x);

// Strings
// const name = 'Israel Co.'
// const firsName = 'Arseni'
// const psik = ''
// console.log("My company's name " + '"' + name + '"' +'!')
// console.log(`${firsName}: My company's name is "${name}"`)
//
// const x = 5
// const y = 10;
// console.log(`The sum is: ${x + y}`)

// const s = 'Hello World! My name is Yossi!';
// console.log(s);
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(4, 20));
// console.log(s.substring(0, 8).toLowerCase());
// console.log(s.substring(0, 8).toUpperCase());
// console.log(s.split('!'))

// Arrays
// const numbers = new Array(1, 2, 3, 4)
// const numbers = [1, 2, 3, 4]
// console.log(numbers)

// const numbers = [1, true, 'hello', 'hello', null, []]
// console.log(numbers)
// numbers[1] = 'eser'
// console.log(numbers)
// numbers.push('apple')
// numbers.unshift('orange')
// console.log(numbers)
// const outValue = numbers.pop()
// console.log(outValue)
// console.log(numbers)
// console.log(Array.isArray(numbers))
// // console.log(numbers[100])
// console.log(numbers.indexOf('hello'))

// Objects

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st.',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// person.middleName = 'AAAAA'
// person.firstName = 'Tal'
// console.log(person)
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.hobbies[1])

// const firstName = person.firstName
// const lastName = person.lastName
// const city = person.address.city
// const {firstName, lastName, address: {city}} = person
// console.log(firstName)
// console.log(lastName)
// console.log(city)

// const todos = [
//     {
//         id: 1,
//         text: 'do homework',
//         isCompleted: true,
//     },
//         {
//         id: 2,
//         text: 'do dishes',
//         isCompleted: true,
//     },
//         {
//         id: 3,
//         text: 'do meeting',
//         isCompleted: false,
//     },
// ]

// console.log(todos)
// const todosJSON = JSON.stringify(todos)
// console.log(todosJSON)
// //
// const todosBackToObject = JSON.parse(todosJSON)
// console.log(todosBackToObject)

// Loops

// const todos = [
//     {
//         id: 1,
//         text: 'do homework',
//         isCompleted: true,
//     },
//         {
//         id: 2,
//         text: 'do dishes',
//         isCompleted: true,
//     },
//         {
//         id: 3,
//         text: 'do meeting',
//         isCompleted: false,
//     },
// ]

// for(let i=0; i < 10; i++){
//     console.log(`For loop number ${i}`)
// }
//
// let i = 0
// while(i < 10){
//     console.log(`While loop number ${i}`)
//     i++;
// }

// for(let i=0; i < todos.length; i++){
//     console.log(todos[i].text)
// }

// for (let todo of todos) {
//     console.log(todo.text)
// }

// todos.forEach(function (myItem) {
//     console.log(myItem.text)
// })
//
// const todoText = todos.map(function (todo) {
//     return todo.text
// })
// console.log(todos)
// console.log(todoText)
//
// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted;
// }).map(function (todo) {
//     return todo.text
// })
// console.log(todoCompleted)

// Conditionals 

// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 === 10)

// const x = 5
// const y = 11
// console.log(x > 5 || y > 10)  // python: or
// console.log(x > 5 && y > 10)  // python: and
//
// if (x > 5 && y > 10) {
//     console.log('Yuhuuu')
// } else {
//     console.log('Uf')
// }

// let x = 10
// let color = x > 10 ? 'red': 'blue'
// x = 100
// console.log(color)

// const color = 'orange'
// switch (color) {
//     case 'red':
//         console.log('color is red')
//         break
//     case 'blue':
//         console.log('color is blue')
//         break
//     default:
//         console.log('color is default')
//         break
// }

//Functions

function addNumbersOld(num1, num2) {
    console.log(num1)
    console.log(num2)
    return num1 + num2
}

console.log(addNumbersOld(2, 3))

// Arrow functions


const addNumbers = (num1, num2) => {
    return num1 + num2
}

console.log(addNumbers(10, 19))

function addOneOld(num) {
    return num + 1
}
console.log(addOneOld(10))

const addOne = (num1, num2) => num1 + num2

console.log(addOne(10, 10))

const print = name => console.log(name)

print('Arseni')

const todos = [
    {
        id: 1,
        text: 'do homework',
        isCompleted: true,
    },
        {
        id: 2,
        text: 'do dishes',
        isCompleted: true,
    },
        {
        id: 3,
        text: 'do meeting',
        isCompleted: false,
    },
]

todos.forEach(item => console.log(item.text))


// const addNumbers = (num1=1, num2=1) => {
//     return num1 + num2
// }
//
// console.log(addNumbers(10, 20))
//
// const printName = name => console.log(name)
// const plusOneLong = (num1) => {
//     return num1 + 1
// }
// const plusOne = num1 => num1 + 1
//
//
// printName('Tal')
//
// console.log(plusOne(100))
//
// const todos = [
//     {
//         id: 1,
//         text: 'do homework',
//         isCompleted: true,
//     },
//         {
//         id: 2,
//         text: 'do dishes',
//         isCompleted: true,
//     },
//         {
//         id: 3,
//         text: 'do meeting',
//         isCompleted: false,
//     },
// ]
//
// todos.forEach(todo => console.log(todo.text))













