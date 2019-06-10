import React, {Component} from 'react';
import Header from './Header'
import PaintingList from './PaintingList'
import 'semantic-ui-css/semantic.min.css';
import paintings from './paintings';
import PaintingForm from './PaintingForm'


import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Painting from './Painting';


class App extends Component{

  constructor(){
    super()
      this.state = {
        list: true,
        paintings: paintings
      }
  }



  changeList = () => {
    console.log('I am inside ChangeList function')
  
    this.setState({
      list: !this.state.list
    })
  }

  addPainting = (e) => {
    e.preventDefault()
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
  // console.log(BrowserRouter)
    return (
      <BrowserRouter>
       <div>
         <Switch>
         {/* <Route exact path='/paintings' render={() => <PaintingList paintings={this.state.paintings} /> } /> */}


          {/* <Route path='/paintings/new' component={PaintingForm}/> */}
          
         <Route  path='/paintings/new' render={(routeProps) => <PaintingForm {...routeProps} addPainting={this.addPainting}/> }/>

         <Route path='/paintings/:id' render={(routeProps) => <Painting {...routeProps} paintings={this.state.paintings} />} />

         <Route  path='/paintings' render={() => <PaintingList paintings={this.state.paintings} /> } />

           </Switch>
        
      {/* <Header changeList={this.changeList}/>
      {this.state.list ?  <PaintingList paintings={this.state.paintings} /> : <PaintingForm addPainting={this.addPainting}/>} */}
     
    </div>
      </BrowserRouter>
   
    )
  }
  
}

export default App;
