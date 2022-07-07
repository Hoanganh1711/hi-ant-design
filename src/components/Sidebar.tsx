import {
    FormOutlined,
    UserOutlined,
    HomeFilled,
    AppstoreOutlined
} from '@ant-design/icons';   
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
const { Sider } = Layout;

// components
// import FormList from './FormList';
// import User from './User';
// import SubMenu from 'antd/lib/menu/SubMenu';


const Sidebar = () => {
    
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    
    const items = [
        {
            key: "home",
            icon: <HomeFilled />,
            title: "Trang chủ",
            link: "/"
        },
        {
            key: "form",
            icon: <FormOutlined />,
            title: "Đăng tin",
            link: "./PostNewForm"
        },
        {
            key: "userManagement",
            title: "Quản lý người dùng",
            children: [
                {
                    key: "user",
                    icon: <UserOutlined />,
                    title: "Thông tin người dùng",
                    link: "./User"
                }
            ]
        }
    ];

    return (
        <>
            <Sider style={{}} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">
                    {items.map((item) =>
                        !item.children ? (
                            <Menu.Item key={item.key}>
                                <NavLink className="d-flex align-items-center" to={item.link}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </Menu.Item>
                        ) : (
                            <Menu.SubMenu key={item.key} title={item.title} icon={<AppstoreOutlined />}>
                                {item.children.map((child) =>
                                    <Menu.Item key={child.key}>
                                        <NavLink className="d-flex align-items-center" to={child.link}>
                                            {child.icon}
                                            <span>{child.title}</span>
                                        </NavLink>
                                    </Menu.Item>
                                )}
                            </Menu.SubMenu>
                        )
                    )}
                </Menu>
            </Sider>
        </>
    );
}

export default Sidebar