class TaskList {

  constructor(){
      this.ul = document.createElement('ul')
      this.h2 = document.createElement('h2')
      this.h2.innerText = "TO-DO"
  }


render(desc){
   let taskitem = new TaskListItem(desc)
   let liArray = taskitem.renderListItem()
   liArray.forEach((li) => {
       this.ul.append(li)
   })
}

sorting(sort){
  let liArray = TaskListItem.sortListItem(sort)
  liArray.forEach((li) => {
      this.ul.append(li)
  })
}


}