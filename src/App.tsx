import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/style.css'
import Home from './pages/Home'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App