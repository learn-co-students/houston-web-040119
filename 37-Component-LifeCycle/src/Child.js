import React, {Component} from 'react';
import Grandchild from './Grandchild'


class Child extends Component{

    constructor(){
        super()
        this.state = {
            texas: false
        }
        // console.log('Child constructor')
      }
    
      componentDidMount(){
        // console.log('Child CDM')
      }

      change = () => {
        this.setState({
            texas: !this.state.texas
        })
      }


    render(){
        // console.log('Child render')
        return(<div>
            <button onClick={this.change}>Click Me!!!</button>
                {this.state.texas ? <Grandchild/> : null}
            </div>)

    }
}

export default Child