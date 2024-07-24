// src/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Reducer";

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container">
                <h1 className="fs-1" style={{ paddingTop: "150px" }}>
                    Redux Counter
                </h1>
                <h3 style={{ paddingTop: "70px" }}>Count : {count}</h3>
                <div
                    className="counter-button"
                    style={{ paddingTop: "100px", paddingBottom: "290px" }}
                >
                    <button
                        className="btn btn-success mx-3"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
