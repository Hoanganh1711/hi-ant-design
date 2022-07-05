import {
  HomeFilled,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import FormList from './components/UpNewForm/FormList';
import Sidebar from './components/Sidebar';
import User from './components/UsersManagement/PostedManager';
import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  // const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sidebar />

      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Routes>
              <Route path="/FormList" element={<FormList />} />
              <Route path="/User" element={<User />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;