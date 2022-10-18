import React from 'react';

let year = new Date().getFullYear();

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Copyright {year} ⓒ </p>
      </footer>
    )
  }
}

export default Footer;