import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    AppstoreOutlined,
    BookOutlined 
} from '@ant-design/icons';
import './Sider.css';
const { Sider } = Layout;
const { SubMenu } = Menu;
export default function sider(props) {
    return (
        <Sider trigger={null} collapsible collapsed={props.isOpen}>
            <div className="logo" ><div>logo</div></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu key="sub2" icon={<BookOutlined />} title="NOTE">
                <Menu.Item key="1">Option 5</Menu.Item>
                <Menu.Item key="2">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="3">Option 7</Menu.Item>
                    <Menu.Item key="4">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<BookOutlined />} title="Sample">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub5" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            </Menu>

        </Sider>
    );
}
