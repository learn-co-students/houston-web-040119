const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
const addToyForm = document.querySelector('.add-toy-form')




let addToy = false
const baseURL = "http://localhost:4000/toys"

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

fetch(baseURL)
.then((res) => res.json())
.then((toys) => {
  toys.forEach((toy) => renderToy(toy))
})


{/* <div class="card">
    <h2>Woody</h2>
    <img src=toy_image_url class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn">Like <3</button>
  </div> */}


function renderToy(toy){
  let div = document.createElement('div')
  div.setAttribute("class","card")
  // div.className = "card"

  let htag = document.createElement('h2')
  htag.innerText = toy.name //`${toy.name}`

  let img = document.createElement('img')
  img.setAttribute("src",`${toy.image}`)
  img.setAttribute("class","toy-avatar")

  let ptag = document.createElement('p')
  ptag.innerText = `${toy.likes} Likes`

  let btn = document.createElement('button')
  btn.setAttribute("class","like-btn")
  btn.dataset.id = toy.id //btn.id = toy.id 
  btn.dataset.likes = toy.likes
  btn.innerText = "Like <3"
  btn.addEventListener("click", (e) => {
      likes(e)
  })

  div.append(htag, img, ptag, btn)
  toyCollection.append(div)
}


addToyForm.addEventListener("submit", (e) => {
  e.preventDefault()

  let toyName = e.target.children[1].value //e.target[0].value
  let imageUrl = e.target.children[3].value //e.target[1].value

  fetch(baseURL, {
    method: "POST",
    headers:{
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': toyName,
      'image': imageUrl,
      'likes': 0
    }) 
  })
  .then((res) => res.json()) //(res) => {return res.json()}
  .then((toy) => {
    renderToy(toy)
    e.target.reset()
  } )

})


function likes(e){
  e.preventDefault()

  let newLikes = parseInt(e.target.previousElementSibling.innerText.split(" ")[0]) + 1

  fetch(baseURL+`/${e.target.dataset.id}`,{
    method: "PATCH",
    headers:{
      'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     "likes": newLikes
   })
  })
  .then(res => res.json())
  .then(()=> {
    e.target.previousElementSibling.innerText = `${newLikes} Likes`
  })
  .catch(function(error){
    console.log(error.message)
  })
}



