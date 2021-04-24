import './lawpage.css';
import {  Layout,Input, Row, Col} from 'antd';
import React , { useState,useEffect }from 'react';
import StyleTree from "../utility/tree/tree.js"
import StyleTalbe from "../utility/table/table.js"
import background from '../../image/0415LAW-01.jpg';
import {fetchData} from "../utility/API/lawApi.js"
const { Sider, Content } = Layout;
const { Search } = Input;
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

const onSearch = value => console.log(value);


const FirstPage = () => {
  

const [data,setData] = useState([])

useEffect(() => {
  (async()=>{
    const res = await fetchData()
    setData(res)
  })()
  
}, []);

const columns = [
  {
    title: 'area',
    dataIndex: 'area',
    key: 'area',
    render: text => <a>{text}</a>,
  },
  {
    title: 'conclusion',
    dataIndex: 'conclusion',
    key: 'conclusion',
  },
  {
    title: 'datetime',
    dataIndex: 'datetime',
    key: 'datetime',
  },
  {
    title: 'participants',
    key: 'participants',
    dataIndex: 'participants'
  }
];

    return (
        <>
        <StyleBanner/>
        <Row style={{marginTop:"30px"}}>
          <Col span={12}  push={6}>
            <Search placeholder="input search text" onSearch={onSearch} />
          </Col>
        
        <Col span={24}>
        <Layout className="lawLayout">
            <Sider className="lawSider">
                <StyleTree className="lawTree" treeData={treeData}/>
            </Sider>
            <Content className="lawContent">
                <StyleTalbe className="lawTable" columns={columns} tabledata={data}/>
            </Content>
        </Layout>
        </Col>
        </Row>
        </>
    )
}

export default FirstPage;