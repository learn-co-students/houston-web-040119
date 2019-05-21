class Person{
    constructor(name){
        this.name = name
    }

    renderInfo(){
        return Person.ul
    }
}

Person.ul =  document.createElement('ul')
