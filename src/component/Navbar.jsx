import { useState } from "react";
import { Link, Links } from "react-router-dom";
import looogo from "../assets/looogo.png"
export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={looogo} alt="logo" />
      </div>

     

      {/* Search */}
      <div className="search-box">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search products you want" />
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <Link to="/" >Home</Link>
        
        <Link to="/aboutus">About Us</Link>

        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Product Collections ▼

          {showDropdown && (
            <div className="dropdown-menu">
              <div className="column">
                <p>Wall Décor</p>
                <p className="active">Table Décor</p>
                <p>Lac Collection</p>
                <p>Event Décor</p>
                <p>Festive Collection</p>
                <p>Rajasthani Traditional</p>
              </div>

              <div className="column">
                <p>Handmade Accessories</p>
                <p>Spiritual Items</p>
                <p>Handpainted Articles</p>
                <p>Diary Collection</p>
                <p>Christmas Items</p>
                <p>Ottomans & Puffs</p>
              </div>
            </div>
          )}
        </li>

        <Link to="/contact" >Contact Us</Link>

      </ul>

      {/* Right Side */}
      <div className="nav-icons">
        <span>🛒 Cart</span>
        <span>👤 Account</span>

        <button className="enquiry-btn">
          Export Enquiry
        </button>
      </div>
    </nav>
  );
}