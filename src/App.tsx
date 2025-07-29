import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/dashboard';
import Login from './page/login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  )
}

export default App
