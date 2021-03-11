import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';

const Country = (props) => {
  const { name, population, region, numericCode, flag, capital } = props.country
  let history = useHistory();
  function handleClick(countryName) {
    history.push(`/country/${countryName}`);
  }
  return (
    <div className="col-lg-4 col-md-6 col-12 main">
      {/* <div className="bg-warning col-md-4">
            <img src={flag} alt=""/>
            <h1>Name: {name}</h1>
            <h2>Population: {population}</h2>
           <h3> capital: {capital}</h3>
            <h3>Region: {region}</h3>
            <p>Code: {numericCode}</p>
            <p><Link to={`/country/${name}`}>About</Link>
            <button onClick={()=> handleClick(name)}>Detail</button>
            </p> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           
      </Card.Text>
          <Button onClick={()=> handleClick(name)} variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </div>

    //     < className="card" style="width: 18rem;">
    //     <img src="..." class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     </div>
    //     <ul class="list-group list-group-flush">
    //       <li class="list-group-item">An item</li>
    //       <li class="list-group-item">A second item</li>
    //       <li class="list-group-item">A third item</li>
    //     </ul>
    //     <div class="card-body">
    //       <a href="#" class="card-link">Card link</a>
    //       <a href="#" class="card-link">Another link</a>
    //     </div>
    //   </>


  );
};

export default Country;