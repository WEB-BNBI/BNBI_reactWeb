import React, { useState } from 'react';
import Slide from '../Sider/Sider.js'
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';
 const { Header, Content } = Layout;
export default function LayoutDashboard(props) {
    const [isOpen, setIsOpen] = useState(false);
    return(
    <Layout style={{ minHeight: '100vh' }}>
        <Slide
        isOpen={isOpen}
        />
        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {/*控制左邊slider收/展開*/}
            {React.createElement(isOpen ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => {
                setIsOpen(!isOpen);
            }
            })}
        </Header>
        <Content
            className="site-layout-background"
            style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            }}
        >
        {props.menu}
        </Content>
        </Layout>
    </Layout>
    );
}