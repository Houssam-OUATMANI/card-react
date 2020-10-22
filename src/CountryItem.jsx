import React from "react";

export default function CountryItem({ image, name, id, capital, description }) {
  return (
    <li>
      <div className="card" style={{ width: "20rem" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <input type="text" className="btn btn-primary" value="Commander" />
        </div>
      </div>
    </li>
  );
}
