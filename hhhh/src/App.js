import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './components/Home';
import A from './components/A';
import B from './components/B';


import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Header title="首页---"></Header>
        <hr></hr>
            <Router>
                <Link to="/">首页</Link>
                <Link to="/a">A页面</Link>
                <Link to="/b">B页面</Link> 
                <Jump to="/e">&gt</Jump>
                <Route exact path='/' component={Home}></Route>
                <Route exact path="/a" component={A}></Route>
                <Route exact path="/b" component={B}></Route>
                <Route exact path='/children' children={(props)=>{
                    console.log(props.match);
                    return (
                      <div>
                          <h2>用component渲染组件</h2>
                          <h2>用render渲染组件</h2>
                      </div>
                    )
                }}></Route>
                {/* <Switch>                 
                  <Route path="/a" component={A}></Route>
                  <Route path="/b" component={B}></Route>
                  <Route path='/' component={Home}></Route>
                </Switch> */}
                
            </Router>
        <hr></hr>
        <Footer></Footer>
    </div>
  );
}

export default App;
