import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// reportWebVitals.js用于记录页面性能的
import reportWebVitals from './reportWebVitals';

{/* <React.StrictMode>标签包裹在App外可以检查所有组件的代码书写合理性
  做出提示等信息 */}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
