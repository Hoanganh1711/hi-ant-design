import {
    DesktopOutlined,
    FileOutlined,
    FormOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


// components
import FormList from './FormList';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Form', '1', <FormOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);

    const activeStyle = {
        textDecoration: "underline",
    };

    const activeClassName = "underline";

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="menuItem1">
                        <NavLink to="messages">
                            <FormOutlined />
                            <span>Form</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="menuItem2">
                        <NavLink to="messages">
                            <UserOutlined />
                            <span>User</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Các bước đăng tin</Breadcrumb.Item>
                        <Breadcrumb.Item>Soạn tin đăng</Breadcrumb.Item>
                    </Breadcrumb>
                    <h3>Soạn tin đăng</h3>
                    <FormList />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Sidebar