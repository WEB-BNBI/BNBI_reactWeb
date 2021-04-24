import React , { useState } from 'react';
import 'antd/dist/antd.css';
import './table.css';
import { Table, Tag, Space } from 'antd';



const App = (props) => {

  return(
    <Table className={props.className} columns={props.columns} dataSource={props.tabledata} />
  )
}

export default App;