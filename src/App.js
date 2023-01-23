import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { Grid, Container } from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <Container maxWidth="lg" style={{ overflowX: 'hidden' }}>
      <Grid container flexDirection={{ xs: 'column-reverse', sm: 'row' }} >
        <BrowserRouter  >
          <Routes>

            <Route path='/' element={
              <LoginPage />

            } />
            <Route path='register' element={
              <RegisterPage />
            } />

          </Routes>
        </BrowserRouter>
      </Grid>
    </Container>
  );
}

export default App;













