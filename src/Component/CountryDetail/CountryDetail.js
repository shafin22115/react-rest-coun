import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
 const {CountryName} = useParams()
 const [detail, setDetail] = useState([])
 useEffect(()=> {
     fetch(`https://restcountries.eu/rest/v2/name/${CountryName}`)
     .then(res => res.json())
     .then(data => setDetail(data[0]))
     
 },[])
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={detail.flag} alt=""/>
                </div>
                <div className="col-md-6">
                    <h1>{detail.name}</h1>
                    <h2>{detail.population}</h2>
                    <p>{detail.alpha3Code}</p>
                    <h3>{detail.capital}</h3>
                </div>
            </div>
            
        </div>
    );
};

export default CountryDetail;