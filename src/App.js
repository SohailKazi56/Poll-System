import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import HomePage from './Components/HomepageComponents/HomePage';
import LoginPage from './Components/LoginPage';
import PollsHistory from './Components/PollsHistory';

function App() {
  return (
    
    // <LoginPage />
    <HomePage />
    // <PollsHistory />
  );
}

export default App;
