import React,{useState} from "react";

function PlantCard({plant}) { 
  const {name,image,price} = plant
  const[click,setClick] = useState(true) 

function handleClick() { 
  setClick(!click)
}
  

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {click ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
