import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
    {
        title : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title : 'Users',
        path : '/users',
        icon : <IoIcons.IoIosContacts/>,
        cName : 'nav-text'
    },
    {
        title : 'Pasteries',
        path : '/pasteries',
        icon : <IoIcons.IoIosContact/>,
        cName : 'nav-text'
    },
    {
        title : 'Orders',
        path : '/orders',
        icon : <IoIcons.IoMdBasket/>,
        cName : 'nav-text'
    },
    {
        title : 'Posts',
        path : '/posts',
        icon : <IoIcons.IoMdImages/>,
        cName : 'nav-text'
    },
    {
        title : 'Notifications',
        path : '/notifications',
        icon : <IoIcons.IoMdClipboard/>,
        cName : 'nav-text'
    },
    {
        title : 'Tables',
        path : '/tables',
        icon : <IoIcons.IoIosSquare/>,
        cName : 'nav-text'
    },
    {
        title : 'CheckBoxTable',
        path : '/checkBoxTables',
        icon : <IoIcons.IoIosSquare/>,
        cName : 'nav-text'
    },
    {
        title : 'Form',
        path : '/form',
        icon : <IoIcons.IoIosFiling/>,
        cName : 'nav-text'
    }

]