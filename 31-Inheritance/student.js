class Student extends Person{
    

    renderInfo(){ //we can name the method differently, still it will work
       
        let ul = super.renderInfo()
        let li = document.createElement('li')
        li.innerText = `Student => name: ${this.name}`
        ul.append(li)
        document.body.append(ul)
    }

    // renderStudent(){
    //     let li = document.createElement('li')
    //     li.innerText = `Student => name: ${this.name}`
    //     document.body.append(li)
    // }
}