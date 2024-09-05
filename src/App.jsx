
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './firebase/Signup'
import Login from './firebase/Login'
import Dashboad from './firebase/Dashboad'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='' Component={Signup}/>
      <Route path='/login' Component={Login}/>
      <Route path='/dashboad' Component={Dashboad}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
