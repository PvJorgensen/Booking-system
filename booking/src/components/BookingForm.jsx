import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

function BookingForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = { name, date, time };
    // Post the booking to your backend (assuming you have an API endpoint)
    axios.post('http://localhost:5000/api/bookings', booking)
      .then(response => {
        // Redirect to bookings list
        history.push('/bookings');
      })
      .catch(error => {
        console.error('There was an error making the booking!', error);
      });
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;
