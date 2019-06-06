import React from 'react';




function Header(props) {
  return ( <div className={`ui inverted blue menu`}>
            <a className="item">
            <h2 className="ui header">
            <i className={`react icon`} />
            <div className="content">React App</div>
            </h2>
            </a>
        </div>
  )
}

export default Header;