import React, {Component} from 'react';
import Child from './Child'
import { identifier } from '@babel/types';


class Parent extends Component{


  constructor(props){
    super(props)
    this.state = {
        cards: props.data
    }
    // console.log('Parent constructor')
  }

  componentDidMount(){
    console.log(this.state.cards)
  }

//   componentDidUpdate(prevProps){
//     console.log("App component: updated from state");

//   }

    render(){
      
        console.log(this.state.cards)
        return(<div>
            <Child />
        </div>)

    }
}

export default Parent