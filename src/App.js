import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AllMeetUps } from './pages/AllMeetUps';
import { Favorites } from './pages/Favorites';
import { NewMeetUp } from './pages/NewMeetUp';
import { Layout } from './components/layouts/Layout';


function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path='/' element={<AllMeetUps />} />
        <Route path='/new-meetup' element={<NewMeetUp />} />
        <Route path='/favourites' element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
