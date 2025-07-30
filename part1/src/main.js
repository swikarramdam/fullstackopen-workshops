import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'//what's the difference- same with the help of resolver
import App from './App';

const rootElement = document.getElementById("root"); //getting the root element
const reactRoot = ReactDOM.createRoot(rootElement); //Making the DOM element
reactRoot.render(React.createElement(App)); //Tells React to render your App into that root.

