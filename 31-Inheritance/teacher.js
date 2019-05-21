class Teacher extends Person {
    constructor(name, program){
        super(name)
        this.program = program
    }

    renderInfo(){ //we can name the method differently, still it will work
       
        let ul = super.renderInfo()
        let li = document.createElement('li')
        li.innerText = `Teacher => name: ${this.name}, program: ${this.program}`
        ul.append(li)
        document.body.append(ul)
    }
    // renderTeacher(){
    //     let li = document.createElement('li')
    //     li.innerText = `Teacher => name: ${this.name}, program: ${this.program}`
    //     document.body.append(li)
    // }
}