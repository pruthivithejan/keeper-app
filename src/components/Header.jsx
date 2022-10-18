import React from 'react';
import Logo from '../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
           <img src={Logo} alt="" />
           Keeper
        </h1>
      </header>
    )
  }
}

export default Header ;