import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import AdminPage from './AdminPage';

// Placeholder components for other routes
const Trips = () => <h1>All Trips</h1>;
const Travels = () => <h1>Travels</h1>;
const Rooms = () => <h1>Rooms</h1>;
const Transport = () => <h1>Transport</h1>;
const Attractions = () => <h1>Attractions</h1>;
const Support = () => <h1>Support</h1>;
const NewTrip = () => <h1>New Trip</h1>;

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidenav />
        <main className="flex-grow p-4 ml-64">
          <Routes>
            <Route path="/" element={<AdminPage />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/travels" element={<Travels />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/support" element={<Support />} />
            <Route path="/new-trip" element={<NewTrip />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;