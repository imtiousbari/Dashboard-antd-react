import React from 'react';
import { Button } from 'antd';
import Dashboard from './HomePage/Dashboard';
import LoginPage from "../src/Common/Login";

const App: React.FC = () => (
  <div className="App">
    {/* <Dashboard/> */}
    <LoginPage/>
  </div>
);

export default App;

