import './lawpage.css';
import PropTypes from 'prop-types';
import {  Layout} from 'antd';
import React from 'react';
import StyleTree from "../utility/tree/tree.js"
import StyleTalbe from "../utility/table/table.js"
const { Sider, Content } = Layout;

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
        <Banner title='Titlesssss!' description="Description" />
        <Layout style={{marginTop:"20px"}}>
            <Sider>
                <StyleTree treeData={treeData}/>
            </Sider>
            <Content>
                <StyleTalbe/>
            </Content>
        </Layout>
        </>
    )
}

export default FirstPage;