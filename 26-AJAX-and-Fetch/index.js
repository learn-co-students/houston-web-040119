
function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}


function doNothing(){
    var nothing = "YEAHHHHH!!!"
    return nothing
    var donotdothis = "Not going to work!!!"
}

// console.log('Starting the sleep function')
// // sleep(10)
// console.log('Wow that sleep function took forever to run. 1 Star 🌟')
  
document.getElementById('click-button').addEventListener('click', function(){
    console.log("Button clicked!!!")
})

// fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
//     .then(function(responseObj){
       
//         return responseObj.json()

//     })
//     .then(function(data){
//         let div = document.querySelector("#quotes")
//         let p  = document.createElement('p')
//         p.innerText = data[0]
//         div.append(p)
//     })
//     .then(function(){
//         console.log("I want to be printed after fetch!!!")
//     })


    fetch('https://api.scryfall.com/cards/uma/200')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
       let games = data.games
       renderGames(games)

    })


    function renderGames(games){
        let div = document.querySelector("#quotes")
        let ul = document.createElement('ul')

        games.forEach(function(element){
            let li = document.createElement('li')
            li.innerText = element 
            ul.append(li)
        })

        div.append(ul)
    }

console.log("I am after fetch for sure!!!")




fetch('https://api.scryfall.com/cards/uma/200')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let colors = data.color_identity
        let div = document.querySelector("#quotes")
        colors.forEach(function(color){
            let p  = document.createElement('p')
            p.innerText = color
            div.append(p)
        })
    })