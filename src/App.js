import { useSelector } from 'react-redux';
import './App.css';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Profile } from './components/Profile';
import { ThemeChanger } from './components/ThemeChanger';

function App() {

  const fontColor = useSelector( state => state.theme.value.font);

  return (
    <div className="App" style={{color: fontColor}}>
      <Profile />
      <br />
      <Login />
      <Logout />
      <br /><br />
      <ThemeChanger />
    </div>
  );
}

export default App;
