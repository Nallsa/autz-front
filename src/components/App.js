import { useSelector } from 'react-redux';
import { Router, Route, Routes, redirect, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const token = useSelector(state => state.application.token);
  console.log(token);
  if (!token) {
    return (
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<Navigate to='/signin' replace />} />
      </Routes>
    );
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
