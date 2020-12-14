import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from './assets/bg1.jpg';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          sidebartitle
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">a</span>}
          >
            dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}> b</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={'withSuffix'}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={'withPrefix'}
            icon={<FaHeart />}
          >
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
          <SubMenu title={'multiLevel'} icon={<FaList />}>
            <MenuItem>{'submenu'} 1 </MenuItem>
            <MenuItem>{'submenu'} 2 </MenuItem>
            <SubMenu title={'submenu 3'}>
              <MenuItem>{'submenu'} 3.1 </MenuItem>
              <MenuItem>{'submenu'} 3.2 </MenuItem>
              <SubMenu title={`submenu 3.3`}>
                <MenuItem>{'submenu'} 3.3.1 </MenuItem>
                <MenuItem>{'submenu'} 3.3.2 </MenuItem>
                <MenuItem>{'submenu'} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> viewSource</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
