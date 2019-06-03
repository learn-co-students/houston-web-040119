console.log('Are we here?')

{/* <div class="ui inverted red menu">
<a class='item'>
  <h2 class="ui header">
    <i class="bug icon"></i>
    <div class="content">
      bugger
    </div>
  </h2>
</a>
</div> */}

// const navBar = (color, icon, text) => {
//     return React.createElement('div',{className:`ui inverted ${color} menu` }, React.createElement('a', {className: 'item' }, 
//     React.createElement('h2', {className: 'ui header'}, 
//     [
//     React.createElement('i',{className: `${icon} icon`}, null), 
//     React.createElement('div', {className: 'content'}, `${text}`)
// ])))
// }

const NavBar = (props) => {
    console.log(props)
    return (<div className={`ui inverted ${props.color} menu`}>
    <a className='item'>
      <h2 className="ui header">
        <i className={`${props.icon} icon`}></i>
        <div className="content">
        {props.text}
        </div>
      </h2>
    </a>
    </div>)
}

const Text = (props) => {
    return React.createElement('div',{className: 'ui inverted red menu'},[React.createElement('h1',{},props.title) , React.createElement('p',{},props.desc)])
}

const App = () => {
    return(<div>
        <NavBar color='green' icon='paw' text='Corgi'/>
        <Text title='040119' desc = "Houston SE"/>
    </div>)
}

ReactDOM.render(
   <App />,
    document.getElementById('container')
)