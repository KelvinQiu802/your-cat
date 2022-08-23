import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import All from './routes/All';
import Question from './routes/Question';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='all' element={<All />} />
          <Route path='question' element={<Question />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
