import React, {Component} from 'react';



class Painting extends Component{


    render(){
        let displayPainting

        if(this.props.painting){
            displayPainting = this.props.painting
        }else{
            displayPainting = this.props.paintings[this.props.match.params.id - 1]
            // displayPainting = this.props.paintings.find(p => p.id == this.props.match.params.id)
        }




        console.log(this.props)
        return (<div>
                <h2>{displayPainting.title}</h2>
                <img src={displayPainting.image}></img>
                 <p>{displayPainting.artist.name}</p>
                 <span>Votes:{displayPainting.votes}</span><br/>
                 <button>Like</button>
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