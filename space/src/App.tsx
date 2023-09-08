
import './App.css';
import { Home } from './pages/Home/Home';
import { Destination } from './pages/Destination/Destination';
import { Crew } from './pages/Crew/Crew';
import { Technology } from './pages/Technology/Technology';
import { NotFound } from './pages/NotFound/Notfound';
import { Layout } from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
       
        <Routes>
          {/* <Route path='/' element={<Layout />}></Route> */}
            <Route index element={<Home />} />
            <Route path='destination' element={<Destination />} />
            <Route path='crew' element={<Crew />} />
            <Route path='technology' element={<Technology />} />
            <Route path='*' element={<NotFound />} />
          
          
        </Routes>
    </>
  )
}

export default App
