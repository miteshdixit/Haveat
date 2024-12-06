import { useEffect, useState } from "react";
import Filter from "./Filter";
import { foodData } from "../data/foodData";


function Cardlist() {
  const [cardData, setCardData] = useState([]);
  
  async function cardItems() {
  const data = await foodData();

  setCardData(data.recipes);
  console.log(data.recipes)
}
useEffect(() => {
  cardItems();
}, []);

  return (
    <div className="row gx-4" >
      {
       <div className="container">
       <div className="select-wrapper">
         <Filter data={cardData} />
       </div>
     </div>
  }
 
    </div>
  )
}

export default Cardlist
