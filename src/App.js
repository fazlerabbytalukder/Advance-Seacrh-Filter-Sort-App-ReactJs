import './App.css';
import AllFilters from './components/Filters/AllFilters/AllFilters';
import FoodContainer from './components/Contents/FoodContainer/FoodContainer';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [foods, setFoods] = useState([]);
  const [displayFoods, setDisplayFoods] = useState([]);
  const [categoryName, setCategoryName] = useState('all');
  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/fazlerabbytalukder/transfer-client/main/public/Data.json')
        .then(res => res.json())
        .then(data => {
            setFoods(data);
            setDisplayFoods(data);
        });
},[])

  // search part 

  const handleFilterSearch = (e) => {
    if (e.target.value === '') {
      setFoods(displayFoods);
    } else {
      const searchResult = foods.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));

      // for no data show 
      if (searchResult.length > 0) {
        setDisplayFoods(searchResult);
      } else {
        setDisplayFoods([{ "name": "No data" }]);
      }

      // setDisplayFoods(searchResult);
      // console.log(searchResult);
    }
    setSearchValue(e.target.value);
  }
  
  
  
  // filter part 
  const filterContinent = (e) => {
    setCategoryName(e.target.value);
  }

  useEffect(() => {
    if (categoryName === 'all') {
      setDisplayFoods(foods);
      return;
    }
    setDisplayFoods(foods.filter(food => food.category === categoryName))
  },[categoryName])

  return (
    <div className='container mt-3'>
      <div className="row">
        <div className="col-md-4">
          {/* all filter in left */}
          <AllFilters searchValue={searchValue} handleFilterSearch={handleFilterSearch} setCategoryName={setCategoryName} filterContinent={filterContinent}></AllFilters>
        </div>
        <div className="col-md-8">
          {/* all Foods */}
          <FoodContainer foods={foods} setFoods={setFoods} displayFoods={displayFoods} setDisplayFoods={setDisplayFoods}></FoodContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
