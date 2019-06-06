import React, {Component} from 'react';


class Grandchild extends Component{
    constructor(){
        super()
        // console.log('Grandchild constructor')
      }
    
      componentDidMount(){
        console.log('Grandchild CDM')


      }

      componentWillUnmount(){
        console.log('Grandchild unmount')

      }

    render(){
        // console.log('Grandchild render')
        return(<div>
            
            </div>)

    }
}

export default Grandchild