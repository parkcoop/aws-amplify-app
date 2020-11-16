import logo from './logo.svg';
import './App.css';
import NewEmployee from './pages/Employees/components/NewEmployee';
import Employees from './pages/Employees';
import NavBar from './components/NavBar'
import Routes from './Routes';
// import { Switch } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar>
        <Routes />
      </NavBar>
    </Router>
  );
}

export default App;
