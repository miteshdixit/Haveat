/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { foodData } from "../data/foodData";

function CatogryType() {
  const [meals, setMeals] = useState([]);

  async function fetchMeals() {
    const data = await foodData();
    const mealArray = data.recipes.map((item) => item.mealType);
    const filterArray = mealArray.map((item) => item.slice(0,1));
    console.log(filterArray)
    const mealcount = filterArray.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    setMeals(Object.entries(mealcount)); 
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {meals.map(([mealType, count], index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="card-body ">
                <h5 className="card-title ">{mealType}</h5>
                <div className="d-flex justify-content-between"> 
               {/* <img src="/icon1.jpg" alt="icon image" className="myicon" style={{height:"5rem" , width:"5rem"}}/> */}
                <p className="card-text">{count}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatogryType;
