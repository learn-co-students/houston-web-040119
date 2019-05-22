console.log("Iterators")

const arr = [4,2,8,9,7]

//Iterate through an array


//.forEach => iterate through an array but not returnin anything

arr.forEach((number) => console.log(number))

//.map => iterate through an array and returns an array with the modification provided in the callback funcation

arr.map((number) => number * 2)

// .find => returns first element from an array which passes the condition

arr.find((number) => number > 0)

//.filter => returns an array which include all the elements which passes the condition

arr.filter((number) => number > 0)

//.reduce => takes a callback function as an argument which require two arguments: 1. Accumulator & 2. array elment -> current element

arr.reduce((acc,number) => acc+number)
arr.reduce((acc,number) => { return acc+number}, 10) //start acc with 10 otherwise it will start with first array element


const obj = {
                a: 10,
                b:20,
                c:30,
                d:40
            }

// Iterate through an object
for(const key in obj){
    console.log(obj[key])
}

// Iterate through an array using for...in
for(const index in arr){
    console.log(arr[index])
}

// Iterate through an string using for...in
const string = "Charles is the coolest"

for(const index in string){
    console.log(string[index])
}

// Iterate through an array using for...of
for(const number of arr){
    console.log(number)
}

// Iterate through an string using for...of
for(const char of string){
    console.log(char)
}


// High order funcation => a funaction that returns a funcation or takes a callback funcation as an argument
setInterval(() => {console.log("040119")},3000)

function sayHi(){
    return function(){
        console.log("I am inside a function")
    
    }
}

sayHi()() //it will console log "I am inside a function"

// Spread Operator

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let finalArray = [...arr1,...arr2]

// Declarative programming vs Imperative programming 

// Declarative programming

const sum = x => y => x + y
console.log(sum (5) (5)) //prints 10

// Imperative programming 

function sum(a){
    return function(b){
                return a + b 
            }
}

console.log(sum (5) (5)) //prints 10


