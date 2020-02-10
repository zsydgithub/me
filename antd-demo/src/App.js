import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import { Icon } from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <Icon type="apple" />
      </div>
        
    );
  }
}

export default App;