import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../data/data.js";

function List() {
  const navigate = useNavigate();

  const handleViewDetails = (item) => {
    navigate(`/data/${item.title}`, { state: { data: item } });
  };

  return (
    <div>
      {data.map((item) => (
             <div key={item.title}>
             <h2>{item.title}</h2>
             <p>{item.overview}</p>
             <p>{item.structure}</p>
           </div>
      ))}
    </div>
  );
}

export default List;