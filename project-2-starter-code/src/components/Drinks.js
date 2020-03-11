import React from 'react'
import axios from 'axios'
import DrinkCard from './DrinkCard'

class Drinks extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(res => {
        console.log(res.data)
        this.setState({ data: res.data.drinks })
      })
      .catch(err => console.error(err))

  }
  render() {

    const { data } = this.state
    console.log(data)
    if (!data) {
      return <h1> loading </h1>
    }
    return <section className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {data.map(drink => {
            return <DrinkCard key={drink.idDrink} drink={drink} /> //drink is what we call it so we can recieve it in DrinkCard and {drink} is object of a drink which differs from every time we map
          })}
        </div>
      </div>
    </section>
  }



}

export default Drinks