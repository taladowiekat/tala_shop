import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaTh, FaShoppingCart, FaSearch } from 'react-icons/fa';
import "./Navbar.css";
import { UserContext } from '../context/UUser.jsx';
import { CartContext } from '../context/Cart.jsx';

function Navbar() {
  const navigate = useNavigate();

   let {userToken,setUserToken,userData,setUserData} = useContext(UserContext)

  let {count}=useContext(CartContext);
  console.log(count);

  

  const logout = () => {
    localStorage.removeItem('userToken');
    setUserToken(null);
    setUserData(null);
    navigate('/home');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
          <Link className="navbar-brand" to="/">
            <span className="logo-text">Tshop</span>
          </Link>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                <FaTh /> Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <FaTh /> Products
              </Link>
            </li>
            {userToken? (
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <FaShoppingCart /> 
                  <span className="badge badge-light bg-danger">{count}</span>
                </Link>
              </li>
            ):null}
          </ul>
          
          <form className="d-flex flex-grow-1">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              <FaSearch />
            </button>
          </form>
          <ul className="navbar-nav">
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {/* {userToken ? 'Account' : 'Login'} */}
     {userData!=null?userData.userName:'Account'}

     

    </a>
    <ul className="dropdown-menu dropdown-menu-end">
      {userToken == null ? (
        <>
          <li>
            <Link className="dropdown-item" to="/register">
              Register
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/login">
              Login
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" onClick={logout}>
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  </li>
</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
