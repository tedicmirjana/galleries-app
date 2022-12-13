import React, { useState, useEffect } from "react"
import CarsService from '../services/CarsService'
import { useDispatch, useSelector } from "react-redux";
import { setAll } from "../store/cars/slice";
import { allCars } from "../store/cars/selector";
import { Link } from "react-router-dom";
import SingleCarComponent from '../components/SingleCarComponent';
import { carsFilter } from "../store/cars/selector";
import { setSelectAll } from "../store/cars/slice";
import { setDeselectAll } from "../store/cars/slice";
import { setSortByBrandAsc } from '../store/cars/slice';
import { setSortByBranDesc } from '../store/cars/slice';
import { setSortByMaxSpeedAsc } from '../store/cars/slice';
import { setSortByMaxSpeedDesc } from '../store/cars/slice';
import { Pagination } from "../components/Paginations";
import { selectPage } from "../store/cars/selector";



export default function Cars() {
    // const [cars, setCars] = useState();
    const dispatch = useDispatch();
    // const cars = useSelector(allCars);
    const cars = useSelector(carsFilter);
    const page = useSelector(selectPage)


    const handleGetCars = async () => {
        const cars = await CarsService.getAll();
        // setCars(cars.data);
        dispatch(setAll(cars.data));

    }
    useEffect(() => {
        handleGetCars();
    }, [])

    const lastCarIndex = page.current_page * page.cars_per_page
    const firstCarIndex = lastCarIndex - page.cars_per_page
    const currentCars = cars.slice(firstCarIndex, lastCarIndex)

    return <div>

        <h3>List of cars:</h3>
        {/* <ul>
            {cars && cars.map((car) => (<Link to={`/cars/${car.id}`} key={car.id}>
                <li>
                    {car.brand}
                    <button >Edit</button>
                </li>
            </Link>))}
        </ul> */}
        <button onClick={() => dispatch(setSelectAll())}>Select All</button>
        <button onClick={() => dispatch(setDeselectAll())}>Deselect All</button>
        <div>
            <button onClick={() => dispatch(setSortByBrandAsc())}>Sort by Brand asc</button>
            <button onClick={() => dispatch(setSortByBranDesc())}>Sort by Brand desc</button>
            <button onClick={() => dispatch(setSortByMaxSpeedAsc())}>Sort by Max speed asc</button>
            <button onClick={() => dispatch(setSortByMaxSpeedDesc())}>Sort by Max speed desc</button>
        </div>
        {/* {(cars && cars.length != 0) ? */}
        <ul>
            {cars &&
                currentCars.map((car) => (
                    // <li
                    //     key={car.id}>
                    <SingleCarComponent
                        key={car.id}
                        brand={car.brand}
                        model={car.model}
                        year={car.year}
                        maxSpeed={car.maxSpeed}
                        isAutomatic={car.isAutomatic}
                        engine={car.engine}
                        number_of_doors={car.number_of_doors}
                    />
                    // </li>
                ))
            } </ul >
        {/* : "no such car"} */}
        {cars.length === 0 && (<h2>There is no wanted car.</h2>)}
        <Pagination
            totalCars={cars.length}
            carsPerPage={page.cars_per_page}
        />

    </div >
}