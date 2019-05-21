class TaskListItem {
  constructor(desc){
    this.description = desc
  }

  renderListItem(){
    
      let listitem = document.createElement("li")
      listitem.innerText = this.description

      let btn = document.createElement('button')
      btn.innerText = 'X'  
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        e.target.parentElement.remove()
    })


      let selectTag = document.createElement('select')
      let titleOpt = document.createElement("option")
      titleOpt.innerText = "Select Priority"
      titleOpt.selected = true
      titleOpt.disabled = true
      selectTag.append(titleOpt)
      let arr = ["Low", "Medium", "High"]
      arr.forEach((priority) => {
        let opt = document.createElement('option')
        opt.text  = priority
        opt.value = priority
        selectTag.append(opt)
      })

      selectTag.addEventListener("change", (e) => {
        switch(e.target.value) {
            case "High":
              e.target.parentElement.style.color = "red"
              break;
            case "Medium":
                e.target.parentElement.style.color = "yellow"
              break;
            case "Low":
                e.target.parentElement.style.color = "green"
              break;
            default:
              console.log("not valid selection") 
          }

      })


      listitem.append(btn , selectTag)

      TaskListItem.all.push(listitem)

      return TaskListItem.all

  }


  static sortListItem(sort){

        let sorted = []
        let high = []
        let medium = []
        let low = []

        TaskListItem.all.forEach((task) => {
            switch(task.style.color){
                case "red":
                    high.push(task)
                    break;
                case "yellow":
                    medium.push(task)
                    break;
                case "green":
                    low.push(task)
                    break;
                default:
                    console.log("not valid selection")
            }

        })

      switch(sort){
        case "ASC":
            sorted = [...low, ...medium, ...high]
            break;
        case "DESC":
            sorted = [...high, ...medium, ...low]
            break;
        default:
            console.log("not valid selection")
      }

      return sorted
  }
}

TaskListItem.all = [] //can't define it before class because it won't know what TaskListItem is
