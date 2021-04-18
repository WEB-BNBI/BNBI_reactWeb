import React , { useState } from 'react';
import 'antd/dist/antd.css';
import './table.css';
import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags'
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action'
  },
];

const App = (props) => {
  const fetchData = async (param)=>{
    try{
        const data = await fetch('http://127.0.0.1:3001/dev/api/v1/law/getVerdictList/八十五年度再審字第六一八號',{
            method:"get",
            body: param // encode 
        }).then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          return (myJson)
        });
        return(data);
    }catch(e){
        console.error(e)
    }
}
const data2=fetchData();
  return(
    <Table columns={columns} dataSource={data2} />
  )
}

export default App;