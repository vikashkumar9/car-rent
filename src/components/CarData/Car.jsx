import React, { useState } from "react";
import cars from "../../data/cars.json";
import "./car.css";
import ReactPaginate from "react-paginate";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CarInput } from "../input/CarInput";
import CarCard from "../carCard/CarCard";
import { useNavigate, useParams } from "react-router-dom";

const Car = () => {
  const [item, setItem] = useState("");
  const [carData, setCarData] = useState(cars.cars);

  const usersPerPage = 6;

  const { page } = useParams();

  const pageNumber = parseInt(page);

  console.log(pageNumber);

  const navigate = useNavigate();

  console.log(pageNumber);

  const filteredCar = carData.slice(
    pageNumber * usersPerPage,
    (pageNumber + 1) * usersPerPage
  );
  const pageCount = 10;

  const changePage = ({ selected }) => {
    // console.log(selected, "sell");
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
          <CarInput
            onChangeHandler={onChangeHandler}
            value={item}
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
