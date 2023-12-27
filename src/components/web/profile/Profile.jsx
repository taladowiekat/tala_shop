import React, { useContext } from 'react'
import { UserContext } from '../context/UUser.jsx'
import style from './Profile.moduls.css';
import { Link, Outlet } from 'react-router-dom';
function Profile() {
    const {userData , loading} = useContext(UserContext)
    if(loading){
      return <p>LOADING ...............</p>
    }
  return (

    <div className={`${style.profile}`}>
      <div className={`${style.profileLinks}`}>
        <nav>
          <Link to='info'>info</Link>
          <Link to='contact'>contact</Link>
        </nav>
      </div>

      <div className={`${style.userData}`}>
        <Outlet/>
      </div>
    </div>

    )
}

export default Profile