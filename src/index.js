import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DisplayScore from './components/DisplayScore';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
      <App cup={"full"}/>
      {/* <DisplayScore/> */}
</React.StrictMode> 
);


