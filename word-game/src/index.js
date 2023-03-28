import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RenderQuestions from './components/RenderQuestions';
import WelcomePage from './components/WelcomePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
      <App cup={"full"}/>
      {/* <WelcomePage/> */}
    
</React.StrictMode>
);


