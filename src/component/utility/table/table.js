import React , { useState } from 'react';
import 'antd/dist/antd.css';
import './table.css';
import { Table, Tag, Space } from 'antd';

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


const App = (props) => {

  return(
    <Table columns={columns} dataSource={props.tabledata} />
  )
}

export default App;