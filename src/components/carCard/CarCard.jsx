import React from "react";
import { SlPeople } from "react-icons/sl";
import { BsFuelPump, BsSpeedometer } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";

const CarCard = (props) => {
  return (
    <div className="grid-container">
      {props.filteredCars.map((car) => (
        <div key={car.id} className="car">
          <div>
            <img
              src={car.carImage}
              alt={car.carName}
              height="250px"
              width="390px"
              className="car-image"
            />
          </div>
          <div className="car-name-year">
            <h3>{car.carName}</h3>
            <h3 className="car_year">{car.year}</h3>
          </div>
          <div className="capacity_fuel">
            <div className="capacity">
              <span className="car_icons">
                <SlPeople />
              </span>
              <p>{car.capacity} People</p>
            </div>
            <div className="fuel">
              <span className="car_icons">
                <BsFuelPump />
              </span>
              <p>{car.fuelType}</p>
            </div>
          </div>
          <div className="mil_type">
            <div className="milaze">
              <span className="car_icons">
                <BsSpeedometer />
              </span>
              <p>{car.milaze} km/1-litre</p>
            </div>
            <div className="auto_manual">
              <span className="car_icons">
                <GiCartwheel />
              </span>
              <p>{car.transmission}</p>
            </div>
          </div>
          <div className="car_price">
            <div>
              <h4>${car.pricePerMonth}/month</h4>
            </div>
            <div>
              <button className="like_button">
                <AiOutlineHeart />
              </button>
              <button className="rent_button">Rent now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
