import React from 'react';

function CTAButton() {
  const handleBooking = () => {
    window.location.href = 'https://example.com/booking';
  };

  return (
    <button className="cta-button" onClick={handleBooking}>Book Now!</button>
  );
}

export default CTAButton;