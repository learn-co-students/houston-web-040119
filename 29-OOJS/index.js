console.log("MONDAY!!!")

let imageForm = document.querySelector(".new-form")

imageForm.addEventListener("submit",(e) => {
    e.preventDefault();
    let img = new Image(e.target[0].value, e.target[1].value)
    img.render()
});

// function render(form){
//     let p = document.createElement('p')
//     p.innerText =  form[0].value 
//     let image = document.createElement('img')
//     // image.setAttribute("src",form[1].value) 
//     image.src = form[1].value
//     document.body.append(p,image)                                                       
// }


class Image{
    constructor(title,url){
        this.title = title
        this.url = url
    }

    render(){
        let p = document.createElement('p')
        p.innerText = this.title
        let image = document.createElement('img') 
        image.src = this.url
        document.body.append(p,image)           
    }

}
















class Corgis{
    constructor(name,age,color){
      this.name = name
  this.age = age 
  this.color = color 
  }
}

let charles = new Corgis("Charles",5,"purple")

class square{
    constructor(height,width){
   this.height = height
   this.width = width
   }
   
   changeHeight(){
   
   this.height = 50
   }
   
   static someMethod(){
   console.log(this)
   }

}