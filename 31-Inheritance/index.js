let infoForm = document.querySelector(".new-form")

infoForm.addEventListener("submit",(e) => {
    e.preventDefault();
    
    switch(e.target[1].value){
        case "teacher":
            let teacher = new Teacher(e.target[0].value, "SE")
            teacher.renderInfo()
            break;
        case "student":
            let student = new Student(e.target[0].value)
            student.renderInfo()
            break;
        default:
            console.log("Not valid Selection!!!")
    }

    e.target.reset()
});




//practice during lecture
class Animal{
    constructor(name){
    this.name = name
    }
    
    speak(){
    return 'Hello!'
    }
}


class Cat extends Animal{
    constructor(name, gender){
    super(name)
    this.gender = gender
    
    }
    
    speak(){
    
    return `${super.speak()} I am a cat!!!`
    }
}


class Dog extends Animal{
    constructor(name, breed){
    super(name)
    this.breed = breed
    
    }
    
    speak(){
    
    return `${super.speak()} I am a dog!!!`
    }
}



let dog1 = new Dog("Richi", "pug")
dog1.speak()

let cat1 = new Cat("Meawww", "Male")
cat1.speak()

