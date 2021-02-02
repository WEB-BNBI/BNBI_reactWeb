import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import FirstPage from "./component/firstpage/FirstPage.js";
import SecondPage from "./component/secondpage/SecondPage.js";
import Slide from './component/utility/Sider/Sider.js'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Slide
        isOpen={isOpen}
      />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
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
          <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route path="/sec" component={SecondPage} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
