import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from 'react-router-dom';
import { SideBarData } from './SidebarData'
import './Sidebar.css'
import { IconContext } from 'react-icons'

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const logout_fct = () => { console.log('logout ...')}
    const Notifications_fct = () => { console.log('notes ...')}
    return (
        <>
            <div className="sidebar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div className="btn-logout">
                <Link to="#">
                    <IoIcons.IoIosLogOut  onClick={logout_fct}/>
                </Link>
                </div>
                <div className="btn-notification">
                <Link to="/notifications">
                    <IoIcons.IoIosNotifications onClick={Notifications_fct}/>
                </Link>
                </div>
            </div>
            <nav className = { sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className = 'nav-menu-items'>
                    <li className = 'navbar-toggle' onClick={showSidebar}>
                        <Link to="/" className='menu-icon'>
                           {/* <AiIcons.AiOutlineClose/>*/}
                            <AiIcons.AiOutlineDashboard/>
                            <h4>Dashboard</h4>
                        </Link>
                        
                    </li>
                    {SideBarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to = {item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>      

    )
}

export default Sidebar
