import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import FirstPage from "./component/firstpage/FirstPage.js";
import SecondPage from "./component/secondpage/SecondPage.js";
import notePage from "./component/notepage/note/note.js";
import LayoutUT from './component/utility/layout/layout.js'
import Layout2 from './component/utility/layout2/layout2.js'
function App() {
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
      exact:false,
      class:"dashboard"
    },
    {
      path:"/note",
      component:notePage,
      exact:true,
      class:"dashboard"
    },
  ]
  
  var route = routeList.map(function(tmp) {
    var routeTmp= <Route key={tmp.path} exact={tmp.exact} path={tmp.path} component={tmp.component} /> 
    if(tmp.class==="dashboard"){
      return <LayoutUT menu={routeTmp} key={tmp.path}/>
    }else if(tmp.class==="web"){
      return <Layout2 menu={routeTmp} key={tmp.path}/>
    } else{
      return routeTmp
    }
});
  return (
          <Switch>
           {route}
          </Switch>
  );
}

export default App;
