import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Trips from './pages/Trips';
import AddTrip from './pages/AddTrip';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EditBalance from './components/EditBalance';
import './styles.css';
import Login from './pages/Login';
import Show_selected from './pages/Show_Selected';
import DeleteTrip from './pages/DeleteTrip';
import EditTrip from './pages/EditTrip';
import OfferForm from './components/OfferForm';
import UserForm from './components/UserForm';
import ProfilePage from './pages/ProfilePage';
import Wallet from './components/Wallet';
import Reservations from './components/Reservations';
import Reservation from './components/Reservation';
import Show_reservation from './pages/Show_reservation';
import Show_Complaint from './pages/Show_Complaint';
import Complaints from './pages/Complaints';
import DeleteUser from './pages/DeleteUser';
import TouristSpots from './pages/TouristSpots';
import TouristSpot from './components/TouristSpot';
import Show_spotation from './pages/Show_spotation';
import AddActivity from './components/AddActivity';
import Addfood from './components/AddFood';
import AddStopStation from './components/ِAddStopStation';
import UpdateTrip from './pages/UpdateTrip';
import Logout from './pages/Logout';
import AboutUS from './pages/AboutUs';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="content">
          <Routes>
            <Route path="/Main" element={<Dashboard />} />
            <Route path="/AboutUs" element={<AboutUS />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/touristSpots" element={<TouristSpots />} />
            <Route path="/TouristSpot" element={<TouristSpot />} />
            <Route path="/users" element={<UserForm />} />
            <Route path="/add-trip" element={<AddTrip />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/Show_selected/:id" element={<Show_selected />} />
            <Route path="/DeleteTrip/:id" element={<DeleteTrip />} />
            <Route path="/EditTrip/:id" element={<UpdateTrip />} />
            <Route path="/AddOffer/:id" element={<OfferForm />} />
            <Route path="/AddActivity/:id" element={<AddActivity />} />
            <Route path="/AddFood/:id" element={<Addfood />} />
            <Route path="/AddStopStation/:id" element={<AddStopStation />} />

            <Route path="/ShowUserProfile/:id" element={<ProfilePage />} />
            <Route path="/Search" element={<ProfilePage />} />
            <Route path="/EditUser/:id" element={<ProfilePage />} />
            <Route path="/DeleteUser/:id" element={<DeleteUser />} />
            <Route path="/EditBalance/:id" element={<EditBalance />} />
            <Route path="/Reservations" element={<Reservations />} />
            <Route path="/Complaints" element={<Complaints />} />
            <Route path="/Show_reservation/:id" element={<Show_reservation />} />
            <Route path="/Show_Complaint/:id" element={<Show_Complaint />} />
            <Route path="/Show_spotation/:id" element={<Show_spotation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
