import React from 'react';
import { Link } from 'gatsby';
import './Nav.scss';

const Nav = props => {
  return (
    <div className="Nav">
      {props.routes.map(el => <Link to={el.route}>{el.title}</Link>)}
    </div>
  )
}

export default Nav;