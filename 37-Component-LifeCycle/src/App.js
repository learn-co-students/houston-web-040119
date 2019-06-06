import React, {Component} from 'react';
import Header from './Header'
import 'semantic-ui-css/semantic.min.css';
import Parent from './Parent'


class App extends Component{

  constructor(){
    super()
    this.state = {
      cards: [],
      isLoading: true,
      userInput: "",
      random: false
    }
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      this.setState({
        cards: data,
        isLoading: false
      })
      console.log(this.state.cards)
    })

    // console.log('App constructor')
  }

  componentDidMount(){
    
  }

  change = (e) => {
    this.setState({
      userInput: e.target.value
    }, () => console.log(this.state.userInput))
    

  }

  

  
  render(){
    // this.setState({
    //   random: true

    // })
    // console.log('App render')
    return (<div>
      <Header/>
    
      <input type="text" onChange={this.change}/>

      {this.state.isLoading ? <div>Loading.....</div> : <Parent data={this.state.cards} test={this.state.userInput}/>}
    </div>
    )
  }
  
}

export default App;
