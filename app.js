//let and const
// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

//task 1
const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

const mapVegetables = carrots.map(carrot => ({type: "carrot", name: carrot}))
// console.log(mapVegetables)

//task 2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }
const filterForFriendly = people.filter(person => person.friendly)
// console.log(filterForFriendly)

//task 3
// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

const doMathSum = (a, b) => a + b
// console.log(doMathSum(7,5))

const produceProduct = (a, b) => a *b
// console.log(produceProduct(10,20))

//task4 
const printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
// console.log(printString('Kat', 'Stark', 40))

//task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }
 const filterForDogs = animals.filter(animal => animal.type === 'dog')
//  console.log(filterForDogs)

//task 6
const vacation = (location, name) => 
    `Hi ${name}!
    
    Welcome to ${location}.

    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
console.log(vacation('Hawaii', 'Janice'))

