import React from 'react';
import { NavBar, Space, Toast } from 'antd-mobile';

const App = () => (
  <div>
    <NavBar>Hellooo</NavBar>
  </div>
);

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
