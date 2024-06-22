import React, { useState } from 'react';
import { Menu, Drawer } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      <Menu mode="horizontal" className="desktop-menu">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="latest-news">
          <Link to="/latest-news">Latest</Link>
        </Menu.Item>
        <Menu.Item key="india-news">
          <Link to="/india-news">India</Link>
        </Menu.Item>
        <Menu.Item key="favorites">
          <Link to="/favorites">Favorites</Link>
        </Menu.Item>
      </Menu>

      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        visible={drawerVisible}
        className="mobile-menu"
      >
        <Menu mode="inline">
          <Menu.Item key="home">
            <Link to="/" onClick={toggleDrawer}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="latest-news">
            <Link to="/latest-news" onClick={toggleDrawer}>
              Latest
            </Link>
          </Menu.Item>
          <Menu.Item key="india-news">
            <Link to="/india-news" onClick={toggleDrawer}>
              India
            </Link>
          </Menu.Item>
          <Menu.Item key="favorites">
            <Link to="/favorites" onClick={toggleDrawer}>
              Favorites
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>

      <div className="hamburger-menu" onClick={toggleDrawer}>
        ☰
      </div>
    </>
  );
};

export default Header;
