import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressCard, faChartLine, faGear, faHouseChimney, faUsers } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className='header'>
        <div className="logo"><h3>Gestão de Membros</h3></div>
    <ul className='menu'>
        <li >
            <Link to="/"> <p className='optionMenu'> <FontAwesomeIcon icon={faHouseChimney}/> Home</p></Link>
            </li>
        <li >
            <Link to="/membros"><p className='optionMenu'>  <FontAwesomeIcon icon={faUsers}/> Membros </p></Link>
        </li>
        <li>
            <Link to="/cadastro"> <p className='optionMenu'>   <FontAwesomeIcon icon={faAddressCard} /> Cadastro</p></Link>
        </li>
        <li>
            <Link to="/dashboard"> <p className='optionMenu'> <FontAwesomeIcon icon={faChartLine}/>  Dashboard </p></Link>
        </li>
    </ul>
    <div className="settings">
    <Link to="/"> <p className='optionMenu'><FontAwesomeIcon icon={faGear}/> Settings</p></Link>
    </div>
    </div>
  )
}

export default Header
