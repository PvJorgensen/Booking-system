import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import './styles.scss'; // Import the SCSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/book" element={<BookingForm />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
