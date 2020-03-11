import React from 'react'
import axios from 'axios'

class SingleDrink extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => {
        console.log(res)
        this.setState({ data: res.data.drinks })
      })

  }

  render() {
    if (!this.state.data) return null //without this it'll break because initial startup data = null and it's trying to get this.state.data.strDrink for example, from null 
    const { strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb } = this.state.data[0] //want these specific properties from this.state.data to render  e.g: this.state.data.strDrink 
    console.log(this.state.data) //this.state.data is an array! 
    return <section className="section">
      <div className="container">
        <h1 className="has-text-centered"> {strDrink} </h1>
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <img src={strDrinkThumb} />
            </div>
            <div className="column is-two-thirds">
              cocktail ingredients
            </div>
          </div>

        </div>
        <div className="container">
          <h2 className="has-text-centered"> {strInstructions} </h2>
        </div>


      </div>
    </section>
  }
}

export default SingleDrink