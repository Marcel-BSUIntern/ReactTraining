import React, {useState} from 'react';

function MyComponent() {

    const [car, setCar] = useState({year:2025, 
                          make:"Jeep",
                          model:"Wrangler"});

    function handleYearChange(){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(){

        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(){

        setCar(c => ({...c, model: event.target.value}));
    }

    return ( <div>
                 <p>Your favorite car is: {car.year} {car.make} {car.model} </p>

                 <input type="number" value={car.year} onChange={handleYearChange} /> <br />
                 <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
                 <input type="text" value={car.model} onChange={handleModelChange} /> <br />
            
                            
            </div> )

}
export default MyComponent
