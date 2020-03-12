import React from 'react'
import axios from 'axios'
import DrinkCard from './DrinkCard'
import CategorySelect from './CategorySelect'
import favourites from '../lib/favourites'

class Drinks extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer')
      .then(res => {
        console.log(res.data)
        this.setState({ data: res.data.drinks })
      })
      .catch(err => console.error(err))

  }


  handleChange(event) {
    console.log(event.target.value)
    this.getNewCategoryData(event.target.value)
  }

  getNewCategoryData(category) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    axios.get(url)
      .then(res => this.setState({ data: res.data.drinks }))
  }

  render() {

    const { data } = this.state
    console.log(data)
    if (!data) {
      return <h1> loading </h1>
    }
    return <section className="section outerbackground">
      <div className="container">
      </div>
      <div className="container innerbackground">
        <div className="select categoriesdropdown ">
          <CategorySelect onChange={(event) => this.handleChange(event)} />
        </div>
        <div className="columns is-mobile is-multiline">
          {data.map(drink => {
            return <DrinkCard
              key={drink.idDrink}
              drink={drink} //was drink={drink}
            /> //drink is what we call it so we can recieve it in DrinkCard and {drink} is object of a drink which differs from every time we map
          })}
        </div>
      </div>
    </section>
  }



}

export default Drinks