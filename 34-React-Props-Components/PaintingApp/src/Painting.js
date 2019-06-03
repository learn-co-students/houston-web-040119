import React, {Component} from 'react';



class Painting extends Component{

    render(){
        return (<div>
                <h2>{this.props.painting.title}</h2>
                <img src={this.props.painting.image}></img>
                 <p>{this.props.painting.artist.name}</p>
              </div>)
    }

}


// function Painting(props) {
//     console.log(props)
//   return (<div>
//     <h2>{props.painting.title}</h2>
//     <img src={props.painting.image}></img>
//     <p>{props.painting.artist.name}</p>
//   </div>
//   )
// }

export default Painting;