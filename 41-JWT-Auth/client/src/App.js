import React, {Component} from 'react';
import Header from './Header'
import PaintingList from './PaintingList'
import 'semantic-ui-css/semantic.min.css';
import paintings from './paintings';
// import {PaintingList} from './PaintingList' => only look for PaintingList in PaintingList.js
import PaintingForm from './PaintingForm'


// function App() {
//   // console.log(paintings)
//   return (<div>
//     <Header />
//     <PaintingList paintings={paintings} />
//   </div>
//   )
// }

class App extends Component{

  constructor(){
    super()
      this.state = {
        list: true,
        paintings: []
      }
  }

  // componentDidMount(){
  //   console.log('test')
  //   fetch('http://localhost:3000/api/v1/paintings')
  //   .then(res => {
  //   return res.json()
  //   } )
  //   .then(data => {
  //     console.log(data)
  //     this.setState({
  //       paintings: data
  //     })
  //   })
  // }

  // state = {
  //   text: '040119'
  // }


  changeList = () => {
    console.log('I am inside ChangeList function')
    // console.log(this.state)
    this.setState({
      list: !this.state.list
      //list: false
    })
  }

  addPainting = (e) => {
    e.preventDefault()
    // debugger
    console.log('I am adding painting')

    let newPainting = {title: e.target[0].value, image:e.target[1].value, artist: {name:e.target[2].value}}
    console.log(newPainting)
    let newArr = this.state.paintings
    newArr.push(newPainting)
    this.setState({
      paintings: newArr,
      list: !this.state.list
    })
   
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  login = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        curretuser: data.username
      })
      
      localStorage.token = data.token
      // localStorage.setItem('token', data.token)

      fetch('http://localhost:3000/api/v1/paintings',{
      method:'GET',
      headers:{
          Authorization: `Bearer ${localStorage.token}`
      }})
      .then(res => res.json())
      .then(data => {
        this.setState({
          paintings: data
        })
      })

    })


  }

  render(){
    // console.log(this.state.text)
    return (<div>
      <Header changeList={this.changeList}/>
      <form onSubmit={(e) => this.login(e)}>
       <label>UserName</label>
       <input onChange={this.handleChange} name="username" type="text" />
       <label>Password</label>
       <input onChange={this.handleChange} name="password" type="password" />
       <input type="submit" onClick={this.handleSubmit} />
     </form>
      {/* {localStorage.token ?  <PaintingList paintings={this.state.paintings} /> : null} */}
     
    </div>
    )
  }
  
}

export default App;
