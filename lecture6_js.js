// console.log('Hi!')



















// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//
//     this.getFullName = function () {
//         return `My name is: ${this.firstName} ${this.lastName}`
//     }
//
//     this.getFullYear = function () {
//         return `The year of birth is: ${this.dob.getFullYear()}`
//     }
// }
//
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
// const person2 = new Person('Rina', 'Katz', '4-3-1988')
//
// console.log(person1.getFullName())
// console.log(person1.getFullYear())
// console.log(person2.getFullName())
// console.log(person2.getFullYear())

// function Person(firstName, lastName, dob){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
// } // po sagarti et amahlaka
// // // do something
// //
// // // ahshav mosif shitot
// Person.prototype.getBirthYear = function () {
//         return `The year of birth: ${this.dob.getFullYear()}`
//     }
//
// Person.prototype.getFullName = function () {
//     return `My name is: ${this.firstName} ${this.lastName}`
// }
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
// const person2 = new Person('Rina', 'Katz', '4-3-1988')
// console.log(person1.getFullName())
// console.log(person1.getBirthYear())
// console.log(person2.getFullName())
// console.log(person2.getBirthYear())

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dob = new Date(dob)
//     }
//
//     getBirthYear(){
//         return `The year of birth: ${this.dob.getFullYear()}`
//     }
//
//     getFullName(){
//         return `My name is: ${this.firstName} ${this.lastName}`
//     }
// }
//
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
// const person2 = new Person('Rina', 'Katz', '4-3-1988')
//
// console.log(person1)
// console.log(person1.dob)
// console.log(person1.dob.getDay())
// console.log(person1.dob.getFullYear())
//
// console.log(person1.getBirthYear())
// console.log(person2.getBirthYear())
//
// console.log(person1.getFullName())
// console.log(person2.getFullName())

// console.log('Hi')
// window.console.log('Hi')
// console.log(window)
// window.console.log('Hi')
// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.localStorage)
// console.log(document)
//
// const form = document.getElementById('my-form')
// console.log(form)
// //
// const items = document.getElementsByClassName('items')
// console.log(items)
// const itemList = document.getElementsByClassName('item')
// console.log(itemList[1])

// const form = document.querySelector('#my-form')
// console.log(form)
// //
// const items = document.querySelector('.items')
// console.log(items)
// //
// const item = document.querySelector('.item')
// console.log(item)
// //
// const itemList = document.querySelectorAll('.item')
// itemList.forEach(item => console.log(item.innerHTML))
// //
// const l = document.querySelector('a')
// console.log(l)
//
// const item = document.querySelector('.item')
// console.log(item)
//
// const itemList = document.querySelectorAll('.item')
// console.log(itemList)

// const items = document.querySelectorAll('.item')
// items.forEach((item) => console.log(item))


// const ul = document.querySelector('.items')
// console.log(ul)
// // ul.remove()
// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent = '<h1>Hi Hi!</h1>'
// ul.children[1].innerHTML = '<h1>Hi Hi!</h1>'
// //
// const btn = document.querySelector('.btn')
// btn.style.background = 'red'
// btn.style.color = 'white'
// btn.style.padding = '10px'


// const btn = document.querySelector('.btn')
// const ul = document.querySelector('.items')
// //
// let counter = 0
// btn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     counter += 1
//     console.log(`Amount of click is: ${counter}`)
//     e.target.style.background = 'green'
//     console.log(e.target.classList)
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h2>Hello</h2>'
// })
//
// btn.addEventListener('mouseover', (e)=>{
//     document.querySelector('body').style.backgroundColor = 'red'
// })
//
// btn.addEventListener('mouseout', (e)=>{
//     document.querySelector('body').style.backgroundColor = 'cadetblue'
// })






const myFrom = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('.users')

// const onSubmit = (e) => {
//     e.preventDefault()
//     // console.log(nameInput)
//     // console.log(nameInput.value)
//     // console.log(emailInput)
//     // console.log(emailInput.value)
//     if(nameInput.value === '' || emailInput.value === ''){
//         msg.innerHTML = 'Please enter all fields!'
//         msg.classList.add('error')
//         setTimeout(()=>{
//             msg.innerHTML = ''
//             msg.classList.remove('error')
//         }, 1000)
//     } else {
//         const li = document.createElement('li')
//         li.innerHTML = `Name: ${nameInput.value} | Email: ${emailInput.value}`
//         userList.appendChild(li)
//         nameInput.value = ''
//         emailInput.value = ''
//     }
// }
//

const onSubmit = (e) => {
    e.preventDefault()
    if (nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please enter all fields!'
        msg.classList.add('error')
        setInterval(() => {
            msg.innerHTML = ''
            msg.classList.remove('error')
        }, 1000)
    } else {

        const li = document.createElement('li')
        li.innerHTML = `Name: ${nameInput.value} | Email: ${emailInput.value}`
        userList.appendChild(li)
        nameInput.value = ''
        emailInput.value = ''
    }
}
myFrom.addEventListener('submit', onSubmit)













