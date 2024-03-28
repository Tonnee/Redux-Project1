import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Input = () => {
    let [input, setInput] = useState();
    let [getValue, setGetValue] = useState();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = () => {
        setGetValue(input);
    };
    return (
        <>
            <input type="number" onChange={handleChange} />
            <button onClick={handleClick}>Plus</button>
        </>
    );
};

export default Input;
