import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import FirstPage from "./component/firstpage/FirstPage.js";
import SecondPage from "./component/secondpage/SecondPage.js";
import notePage from "./component/notepage/note/note.js";
import LayoutUT from './component/utility/layout/layout.js'

function App() {
  const routeList=[
    {
      path:"/",
      component:FirstPage,
      exact:true,
      slide:true
    },
    {
      path:"/sec",
      component:SecondPage,
      exact:false,
      slide:true
    },
    {
      path:"/note",
      component:notePage,
      exact:true,
      slide:true
    },
  ]
  
  var route = routeList.map(function(tmp) {
    var routeTmp= <Route key={tmp.path} exact={tmp.exact} path={tmp.path} component={tmp.component} /> 
    if(tmp.slide==true){
      return <LayoutUT menu={routeTmp}/>
    }
    return routeTmp
});
  return (
          <Switch>
           {route}
          </Switch>
  );
}

export default App;
