console.log("HIIIII")

let s = document.querySelector('h1')
// debugger
s.attributes.style.value = "color: red"


let image = document.createElement("img")
image.setAttribute("src","giphy.gif")
document.body.append(image)


let ul = document.createElement("ul")
let li = document.createElement("li")
li.innerText = "I LOVE DOGS"
let li1 = document.createElement("li")
li1.innerText = "I LOVE CATS"
ul.append(li, li1)
document.body.append(ul)

let p = document.getElementById("one")
    // document.querySelector("#one")
let ptag = document.getElementsByClassName("test")
    // document.querySelector(".test")

let headers = document.querySelectorAll('h1')

headers.forEach(function(element){
    element.innerText = "Flatiron School"
})