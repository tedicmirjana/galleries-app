import React from "react";
import classes from "./AddCar.module.css";

export default function AddCarForm({
    newCar,
    setNewCar,
    onChange,
    onReset,
    onPreview,
}) {
    const years = (start = 1990, end = 2018) => {
        return Array.apply(0, Array(end - start + 1)).map(
            (element, index) => index + start
        );
    };
    const engines = ["diesel", "petrol", "electric", "hybrid"];

    return (
        <div>
            <form className={classes.form} onSubmit={onChange}>
                <div className={classes.control}>
                    <label htmlFor="brand">Brand:</label>
                    <input
                        required
                        minLength='2'
                        type="text"
                        id="brand"
                        value={newCar.brand}
                        onChange={({ target }) =>
                            setNewCar({ ...newCar, brand: target.value })
                        }
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="model">Model:</label>
                    <input
                        required
                        minLength='2'
                        type="text"
                        id="model"
                        value={newCar.model}
                        onChange={({ target }) =>
                            setNewCar({ ...newCar, model: target.value })
                        }
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="year">Select Year:</label>
                    <select
                        required
                        name="year"
                        id="year"
                        value={newCar.year}
                        onChange={({ target }) =>
                            setNewCar({ ...newCar, year: Number(target.value) })
                        }
                    >
                        {years().map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="maxSpeed">MaxSpeed:</label>
                    <input
                        type="number"
                        id="maxSpeed"
                        value={newCar.maxSpeed}
                        onChange={({ target }) =>
                            setNewCar({ ...newCar, maxSpeed: target.value })
                        }
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="doors">Number of doors:</label>
                    <input
                        required
                        type="number"
                        id="doors"
                        value={newCar.number_of_doors}
                        onChange={({ target }) =>
                            setNewCar({ ...newCar, number_of_doors: target.value })
                        }
                    />
                </div>
                <span>
                    <label>Is automatic?</label>
                    <input
                        required
                        type="checkbox"
                        checked={newCar.isAutomatic}
                        onChange={({ target }) => {
                            setNewCar({ ...newCar, isAutomatic: target.checked });
                        }}
                    />
                </span>

                <div>
                    <h4>Pick engine:</h4>
                    {engines.map((engine, index) => (
                        <span key={index}>
                            <input
                                type="radio"
                                name="engine"
                                required
                                checked={engine === newCar.engine}
                                value={engine}
                                onChange={() => setNewCar({ ...newCar, engine })}
                            />
                            {engine.toUpperCase()}
                        </span>
                    ))}
                </div>
                <div className={classes.actions}>
                    <button className="btn" type="submit">
                        Add Car
                    </button>
                </div>
                <div>
                    <button type="button" onClick={onReset}>
                        Reset
                    </button>
                </div>
                <div>
                    <button type="button" onClick={onPreview}>
                        Preview
                    </button>{" "}
                </div>
            </form>
        </div>
    );
}