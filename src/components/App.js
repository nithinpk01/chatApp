import './App.css';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function App() {
  //by nithin
  const { currentUser } = useContext(AuthContext)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    } else {
      return children;
    }
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
