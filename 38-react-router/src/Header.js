import React from 'react';




function Header(props) {
  return ( <div className={`ui inverted red menu`}>
            <a className="item">
            <h2 className="ui header">
            <i className={`paw icon`} />
            <div className="content">Painting App</div>
            </h2>
            </a>
            <a className="item">
              <div onClick={props.changeList}>Add</div>
            </a>
        </div>
  )
}

export default Header;