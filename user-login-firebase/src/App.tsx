import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login";
import Home from './pages/Home';
import { initializeApp } from 'firebase/app';
import { config } from './config';
import AuthRoute from './components/AuthRoute';

initializeApp(config.firebaseConfig);

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  props; // props hatasını önlemek için yapıldı
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <AuthRoute>
              <Home/>
            </AuthRoute>
          }
        />
        <Route 
          path="/login" // küçük harf "login" olmalı
          element={<LoginPage/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
