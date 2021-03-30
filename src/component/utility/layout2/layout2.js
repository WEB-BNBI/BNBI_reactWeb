import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

export default function Layout2(props) {
    return(
    <Layout>
      <Header>Header</Header>
      <Content>{props.menu}</Content>
      <Footer>Footer</Footer>
    </Layout>
    );
}
