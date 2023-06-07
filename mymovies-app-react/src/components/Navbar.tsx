import { Component } from 'react'

class Navbar extends Component {
  render() {

    const logo = "https://cdn-icons-png.flaticon.com/512/2503/2503508.png";
    return (
      <div className="navbar w-screen bg-white shadow-md z-10 top-0 sticky">
        <div className="flex-1 ml-7 bg-base">
          <img src={logo} width={75} height={75} alt="" />
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Movie List</a>
                </li>
                <li>
                    <a href="#">Favourites</a>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;