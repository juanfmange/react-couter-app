import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstComponent } from './firstComponent';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstComponent title="Hola soy juanito" subtitle={ 12345 }/>
    </React.StrictMode>
)