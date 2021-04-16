import './lawpage.css';
import PropTypes from 'prop-types';
import {  Layout} from 'antd';
import React from 'react';
import StyleTree from "../utility/tree/tree.js"
import StyleTalbe from "../utility/table/table.js"
import background from '../../image/0415LAW-01.jpg';
const { Sider, Content } = Layout;

const StyleBanner = ({title, description}) => {  
    return (
      <div>
        <img src={background} alt="Background" style={{width:"100%"}}/>
        {/* <div className="quote">
          <h1>{title}</h1>
          <p>{description}</p>
        </div> */}
      </div>
    );
  }; 
  StyleBanner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };
const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            {
              title: '0-0-0-0',
              key: '0-0-0-0',
            },
            {
              title: '0-0-0-1',
              key: '0-0-0-1',
            },
            {
              title: '0-0-0-2',
              key: '0-0-0-2',
            },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            {
              title: '0-0-1-0',
              key: '0-0-1-0',
            },
            {
              title: '0-0-1-1',
              key: '0-0-1-1',
            },
            {
              title: '0-0-1-2',
              key: '0-0-1-2',
            },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        {
          title: '0-1-0-0',
          key: '0-1-0-0',
        },
        {
          title: '0-1-0-1',
          key: '0-1-0-1',
        },
        {
          title: '0-1-0-2',
          key: '0-1-0-2',
        },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

const FirstPage = () => {
    return (
        <>
        <StyleBanner/>
        <div>asdsadsad</div>
        <Layout style={{margin:"20px"}}>
            <Sider className="lawSider">
                <StyleTree treeData={treeData}/>
            </Sider>
            <Content className="lawContent">
                <StyleTalbe/>
            </Content>
        </Layout>
        </>
    )
}

export default FirstPage;