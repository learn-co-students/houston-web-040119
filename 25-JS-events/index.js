
// document.addEventListener("DOMContentLoaded", function(){
//     document.body.append(character)
// })

const ASSET_ROOT = './assets/green-character'

const character = document.createElement('img')
character.style.width = '75px'
character.style.position = 'absolute'
character.style.left = '0px'
character.style.bottom = '0px'
character.src = `${ASSET_ROOT}/static.gif`
document.body.append(character)

let direction = null
let speed = 5


setInterval(function(){

    const left = parseInt(character.style.left)
    const bottom = parseInt(character.style.bottom)

    if(direction == 'right'){
        character.style.left = `${left+speed}px`
    }

    if(direction == 'left'){
        character.style.left = `${left-speed}px`
    }

    if(direction == 'up'){
        character.style.bottom = `${bottom+speed}px`
    }

    if(direction == 'down'){
        character.style.bottom = `${bottom-speed}px`
    }

}, 20)


function walkRight(){
    character.src = `${ASSET_ROOT}/walkright.gif`
    direction = 'right'
}

function walkLeft(){
    character.src = `${ASSET_ROOT}/walkleft.gif`
    direction = 'left'
}

function walkUp(){
    character.src = `${ASSET_ROOT}/walkup.gif`
    direction = 'up'
}

function walkDown(){
    character.src = `${ASSET_ROOT}/walkdown.gif`
    direction = 'down'
}

function stop(){
    character.src = `${ASSET_ROOT}/static.gif`
    direction = null
}

document.addEventListener("keydown", function(e){
    if(e.repeat) return
    if(e.key == "ArrowRight"){
        walkRight()
    }

    if(e.key == "ArrowUp"){
        walkUp()
    }

    if(e.key == "ArrowDown"){
        walkDown()
    }

    if(e.key == "ArrowLeft"){
        walkLeft()
    }

})

document.addEventListener("keyup", stop)

let btn = document.querySelector("button")

btn.addEventListener("click", function(e){
    e.preventDefault()
    let name =  document.querySelector(".name")
    alert(name.value)
})

let divTag = document.querySelector("div")

divTag.addEventListener("click", function(e){
    if(e.target == divTag.children[0]){
        console.log("P tag is clicked!!")
    }
    if(e.target == divTag.children[1]){
        console.log("H1 tag is clicked!!")
    }
})


let form = document.querySelector(".preference-form")

// form.addEventListener("submit", function(e){
//     e.preventDefault()
//     let checkbox = form[0]

//     if(checkbox.checked){
//         speed = 20
//     }
// })

let checkbox = form[0]

checkbox.addEventListener("change", function(){
    if(checkbox.checked){
                speed = 20
    }
    else{
        speed = 5
    }
})