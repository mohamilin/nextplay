import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';


function HeaderComponents() {
  const { Header } = Layout;

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/now-playing'>Now Playing</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/upcoming'>Coming Soon</Link></Menu.Item>
          </Menu>
        </Header>
      </Layout>

    </>
  )
}

export default HeaderComponents
