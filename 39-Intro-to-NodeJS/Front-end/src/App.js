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

  componentDidMount(){
    console.log('test')
    fetch('http://localhost:8000/paintings')
    .then(res => {
    return res.json()
    } )
    .then(data => {
      console.log(data)
      this.setState({
        paintings: data
      })
    })
  }

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

  render(){
    // console.log(this.state.text)
    return (<div>
      <Header changeList={this.changeList}/>
      {this.state.list ?  <PaintingList paintings={this.state.paintings} /> : <PaintingForm addPainting={this.addPainting}/>}
     
    </div>
    )
  }
  
}

export default App;
