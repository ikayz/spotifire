import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div>
      <header></header>
      <nav>
          <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#firewatch">Fire Watch</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#alerts">Alerts</a></li>
            <li><a href="#tips">Tips</a></li>
          </ul>
        </nav>
        </div>
    );
  }
}

export default Header;
