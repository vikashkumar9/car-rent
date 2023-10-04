import React, { useState } from "react";
import cars from "../../data/cars.json";
import "./car.css";
import ReactPaginate from "react-paginate";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import CarCard from "../carCard/CarCard";
import { useNavigate, useParams } from "react-router-dom";
import { CarInput } from "../input/CarInput"; // Import the CarInput component

const Car = () => {
  const [item, setItem] = useState("");
  const [carData, setCarData] = useState(cars.cars);

  const usersPerPage = 6;

  const { page } = useParams();
  const pageNumber = parseInt(page);
  const navigate = useNavigate();

  const filteredCar = carData.slice(
    pageNumber * usersPerPage,
    (pageNumber + 1) * usersPerPage
  );
  const pageCount = 10;

  const changePage = ({ selected }) => {
    navigate(`/${selected}`);
  };

  const onChangeHandler = (e) => {
    setItem(e.target.value);
  };

  const searchItem = () => {
    const filtered = cars.cars.filter((car) =>
      car.carName.toLowerCase().includes(item.toLowerCase())
    );
    setCarData(filtered);
    setItem("");
  };

  return (
    <>
      <div className="car_card">
        <div className="search_section">
          {/* Use the CarInput component for input and button */}
          <CarInput
            value={item}
            onChangeHandler={onChangeHandler}
            onClick={searchItem}
          />
        </div>
        <div>
          <CarCard filteredCars={filteredCar} />
        </div>
        <div className="pages_adjustment">
          <div className="pagenumbers">
            <p>
              {pageNumber + 1} of {pageCount}
            </p>
          </div>
          <ReactPaginate
            className="pagging"
            previousLabel={<AiOutlineArrowLeft className="arrow_btn" />}
            nextLabel={<AiOutlineArrowRight className="arrow_btn" />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </>
  );
};

export default Car;
