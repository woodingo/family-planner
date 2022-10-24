import React from 'react';
import { Button, NavBar, Space, Toast } from 'antd-mobile';
import { createRoot } from 'react-dom/client';
import '../firebase';
import UserPage from '@pages/UserPage';

const App = () => (
  <div>
    <NavBar>Hellooo</NavBar>
    <UserPage />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
