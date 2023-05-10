import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TabApp from './components/Tabapp';

function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Trainer's home
          </Typography>
        </Toolbar>
      </AppBar>
      <TabApp />

    </div>
  );
}

export default App;
