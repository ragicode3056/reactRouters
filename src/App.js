import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AllMeetUps } from './pages/AllMeetUps';
import { Favorites } from './pages/Favorites';
import { NewMeetUp } from './pages/NewMeetUp';
import Navigation from './components/layouts/Navigation';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<AllMeetUps />} />
        <Route path='/new-meetup' element={<NewMeetUp />} />
        <Route path='/favourites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
