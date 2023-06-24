import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstComponent } from './firstComponent';
import { CounterApp } from './counterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 2606 }/>
    </React.StrictMode>
)