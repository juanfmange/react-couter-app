import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './helloWorld';
import { FirstComponent } from './firstComponent';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstComponent/>
    </React.StrictMode>
)