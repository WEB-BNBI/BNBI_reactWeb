import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import FirstPage from "./component/firstpage/FirstPage.js";
import SecondPage from "./component/secondpage/SecondPage.js";
import notePage from "./component/notepage/note/note.js";
import Layout1 from './component/utility/layout/layout1.js'
import Layout2 from './component/utility/layout2/layout2.js'
import law from './component/law/index.js';
const routeList=[
  {
    path:"/",
    component:FirstPage,
    exact:true,
    class:"web"
  },
  {
    path:"/sec",
    component:SecondPage,
    exact:true,
    class:"dashboard"
  },
  {
    path:"/note",
    component:notePage,
    exact:true,
    class:"dashboard"
  },
  {
    path:"/law",
    component:law,
    exact:true,
    class:"web"
  },
]
function App() {
  
  
  let route = routeList.map(function(tmp) {
    let routeTmp = "";
    let comp=tmp.component;
    if(tmp.class === "dashboard"){
      routeTmp =()=> <Layout1 menu={comp()} key={tmp.path}/>
    }else if(tmp.class === "web"){
      routeTmp =()=> <Layout2 menu={comp()} key={tmp.path}/>
    }else{
      routeTmp =()=> comp()
    }
      return <Route key={tmp.path} exact={tmp.exact} path={tmp.path} component={routeTmp} /> 
});


  return (
          <Switch>
           {route}
          </Switch>
  );
}

export default App;
