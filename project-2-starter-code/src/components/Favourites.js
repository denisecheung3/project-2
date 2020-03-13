import React from 'react'

import favouritesLogic from '../lib/favourites'
import { Link } from 'react-router-dom';
import DrinkCard from './DrinkCard';

class Favourites extends React.Component {
  constructor() {
    super();
    this.state = {
      favourites: favouritesLogic.getFavourites()
    }
  }
  render() {
    const { favourites } = this.state
    if (!favourites) {
      return <h1> loading </h1>
    }
    console.log(favouritesLogic.getFavourites())
    return <div className="favouriteContainer">
      <section className="section">
        <div className="container innerbackground">
          <div className="columns is-mobile is-multiline">
            {favourites.map(favourite => {
              return <DrinkCard key={favourite.idDrink} drink={favourite} />
            })}
          </div>
        </div>
      </section>
    </div>
  }
}


export default Favourites