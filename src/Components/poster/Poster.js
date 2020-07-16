import React from "react";
import "./Poster.css";

function Poster({ large, image, name, onClick }) {
    const handleClick = () => {
        onClick(name);
    };
    return (
        <img
            onClick={handleClick}
            className={`poster ${large && "posterLarge"} `}
            src={image}
            alt={name}
        />
    );
}

export default Poster;
