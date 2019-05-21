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


