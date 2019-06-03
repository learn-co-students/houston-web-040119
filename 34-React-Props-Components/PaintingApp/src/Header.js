import React from 'react';




function Header() {
  return ( <div className={`ui inverted red menu`}>
            <a className="item">
            <h2 className="ui header">
            <i className={`paw icon`} />
            <div className="content">Painting App</div>
            </h2>
            </a>
        </div>
  )
}

export default Header;