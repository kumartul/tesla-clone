import React from 'react';

import SidebarItem from './SidebarItem';

import '../../style/Sidebar/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarItem href='/account' icon='https://cdn0.iconfinder.com/data/icons/uiux-001-line/32/UI_UX_UIUX_Home-512.png' title='Dashboard' />
            <SidebarItem href='/profile' icon='https://icons-for-free.com/iconfiles/png/512/person+user+icon-1320166085409390336.png' title='Profile Settings' />
            <SidebarItem href='/payment' icon='https://w7.pngwing.com/pngs/42/677/png-transparent-credit-card-computer-icons-visa-payment-card-icon-free-s-credit-card-angle-text-rectangle.png' title='Payment Method' />
            <SidebarItem href='/charging' icon='https://icons.iconarchive.com/icons/iconsmind/outline/512/Thunder-icon.png' title='Charging' />
            <SidebarItem href='/loot' icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdlBuKSuaZuvG2F88C7Q5Qspc09sw3TiCEA&usqp=CAU' title='Loot Box' />
            <SidebarItem href='/order' icon='https://cdn-icons-png.flaticon.com/512/3210/3210104.png' title='Order History' />
            <SidebarItem icon='https://cdn-icons-png.flaticon.com/512/126/126467.png' title='Sign Out' signOutLink />
        </div>
    );
}

export default Sidebar;