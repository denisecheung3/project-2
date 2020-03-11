import React from 'react'
import { Link } from 'react-router-dom'

const DrinkCard = ({ drink }) => {
  // console.log(drink)
  const { strDrink, strDrinkThumb, idDrink } = drink
  return <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={strDrinkThumb} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        {/* We get the id from the cheese object we recieved in the
        response. We use this id to construct a link to a specific cheese */}
        <Link className="subtitle" to={`/drink/${idDrink}`}>{strDrink}</Link>
      </div>
    </div>
  </div>
}

export default DrinkCard 