import React from 'react';
import { Button, NavBar, Space, Toast } from 'antd-mobile';
import { createRoot } from 'react-dom/client';
import '../firebase';
import { doAuth } from './api/auth';

const App = () => (
  <div>
    <NavBar>Hellooo</NavBar>
    <Button onClick={doAuth}>do auth</Button>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
