import React from 'react';
import './AvailableCars.css';
import { Link } from 'react-router-dom';

interface Car {
  id: number;
  name: string;
  description: string;
  image: string;
}

const cars: Car[] = [
  { id: 1, name: 'Toyota Camry', description: 'A mid-size sedan', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Honda Civic', description: 'A compact car', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Ford Mustang', description: 'A sports car', image: 'https://via.placeholder.com/150' }
];

function AvailableCars() {
  return (
    <div className="available-cars">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={car.name} />
          <h2>{car.name}</h2>
          <p>{car.description}</p>
          <Link to={`/cars/${car.id}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
}

export default AvailableCars;