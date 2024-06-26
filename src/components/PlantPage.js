import React, {useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() { 

const [plants,setPlants] = useState([]) 
const[searchPlant,setSearchPlant] = useState("")

const addPlant= (newPlant) => { 
  fetch("http://localhost:6001/plants",{ 
    method:"POST", 
    headers: { 
     "Content-Type" : "Application/JSON" 
    }, 
    body: JSON.stringify(newPlant)
  }) 
  .then((resp) => resp.json())
  .then((data) => setPlants([...plants,data]))
} 

const filtered = plants.filter((plant) => { 
  return plant.name.toLowerCase().includes(searchPlant.toLowerCase());
 })

useEffect(() => { 
  fetch("http://localhost:6001/plants") 
  .then ((resp) => resp.json()) 
  .then ((data) => setPlants(() => data))
  
}, [])




  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search searchPlant={searchPlant} setSearchPlant={setSearchPlant}/>
       <PlantList plants={filtered}/> 
          
    </main>
  );
}

export default PlantPage;
