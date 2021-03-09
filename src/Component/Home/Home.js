import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import { Button } from 'react-bootstrap';
const Home = () => {
    const [country, setCountry] = useState([])
    useEffect(()=> {
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div className="container mt-5">
            <div className="row">
            
            {
                country.map(coun => <Country country={coun}></Country>)
            }
            </div>
            </div>
          
       
    );
};

export default Home;