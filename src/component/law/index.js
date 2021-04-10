import './lawpage.css';
import PropTypes from 'prop-types';
import {  Layout, Menu, Breadcrumb  } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const Banner = ({title, description}) => {
    let squares = [];
  
    for (let i = 0; i < 20; i++) {
      squares.push(i);
    }
    
    const generateRandomNum = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);
  
    return (
      <div className="intro">
        <div className="quote">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="squares-wrapper">
          <ul className="squares">
            {squares.map((el, i) => {
              const randomDimensions = Math.floor(
                Math.random() * (150 - 15 + 1) + 15
              );
  
              return ( 
                <li
                  key={i}
                  style={{
                                      left: `${generateRandomNum({ min: 0, max: 90 })}%`,
                                      width: randomDimensions,
                                      height: randomDimensions,
                                      animationDelay: `${i % 2 ? generateRandomNum({ min: 0, max: 20 }) : 0}s`,
                                      animationDuration: `${generateRandomNum({ min: 10, max: 50 })}s`,
                                  }}
                />
              );
            })}
          </ul>
        </div>
        <div className="image-overlay" />
      </div>
    );
  }; 
Banner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };
const menu = () =>{
    return(
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1" icon={<PieChartOutlined />}>
      Option 1
    </Menu.Item>
    <Menu.Item key="2" icon={<DesktopOutlined />}>
      Option 2
    </Menu.Item>
    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
      <Menu.Item key="3">Tom</Menu.Item>
      <Menu.Item key="4">Bill</Menu.Item>
      <Menu.Item key="5">Alex</Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
      <Menu.Item key="6">Team 1</Menu.Item>
      <Menu.Item key="8">Team 2</Menu.Item>
    </SubMenu>
    <Menu.Item key="9" icon={<FileOutlined />}>
      Files
    </Menu.Item>
  </Menu>
    )
}


const FirstPage = () => {
    return (
        <>
        <Banner title='Title!' description="Description" />
        <Layout>
            <Sider>cccc</Sider>
            <Content>Content</Content>
        </Layout>
        </>
    )
}

export default FirstPage;