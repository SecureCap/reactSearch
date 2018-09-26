import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return <div>
     <h1>React App Running!</h1>
    </div>
   }
   
   render(
    <App/>,
    document.getElementById('app')
   )

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();


