import React from 'react'
import axios from 'axios'
import favourites from '../lib/favourites' //library of functions written in favourites that we need here
import Checkbox from './Checkbox'

class SingleDrink extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
      isFavourite: false, //whole point of isFavourite is for the checkbox (whether it's checked or not) and to control whether to add/remove drink (id) from localstorage
      ingredients: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => {
        console.log(res)
        this.setState({
          data: res.data.drinks,
          isFavourite: favourites.checkFavourites(id), //favourites is the js file with the function checkFavourites. checkFavourites will check whether 
          ingredients: this.getIngredients(res.data.drinks) //for every drink going to pull out ingredient:ingredientmesaurement
        })
      })

  }

  checkIfFavourite() {
    return favourites.checkFavourites(this.props.match.params.id)
  }


  getIngredients(data) {
    const ingredients = []
    const drink = data[0]
    let i = 1
    //loops through keys labelled strIngredient + increment 
    while (drink[`strIngredient${i}`] !== null) {
      const newIngredient = [drink[`strIngredient${i}`], drink[`strMeasure${i}`]]
      //sets key to equal the drink ingredient at key strIngredient + increment
      ingredients.push(newIngredient)
      i++
    }
    return ingredients
  }

  handleChecked() { //function that is called everytime checkbox is checked or unchecked. 
    const isFavourite = this.state.isFavourite //(did isFavourite start off true or false) check if already in favourite 
    //if isFavourite = false then it affects below logic
    const id = this.props.match.params.id
    if (!isFavourite) { //if it's not favourite, need to add it. 
      favourites.addFavourite(this.state.data[0]) // WHAT IS FAVOURITES 
    } else if (isFavourite && favourites.checkFavourites(id)) {
      favourites.removeFavourite(id)
    }
    this.setState({ isFavourite: !isFavourite })
  }

  render() {
    if (!this.state.data) return null //without this it'll break because initial startup data = null and it's trying to get this.state.data.strDrink for example, from null 
    const { strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb } = this.state.data[0] //want these specific properties from this.state.data to render  e.g: this.state.data.strDrink 
    console.log(this.state.data) //this.state.data is an array! 
    return <section className="section singledrinkouterbackground">
      <div className="container singledrinkinfo">
        <h1 className="has-text-centered title"> {strDrink} </h1>
        <div className="container">
          <Checkbox
            checked={this.state.isFavourite} //if checked, checked= true we set this.state.isFavourite to true 
            onChange={() => this.handleChecked()} //technically onChange happeens before check
          //onChange -> calls handleChecked, one of the things handleChecked() does is change this.state.isFavourite, then checked changes because this.state.isFavourited is changed
          />

          <section className="section">
            <div className="columns">
              <div className="column is-one-third">
                <img src={strDrinkThumb} />
              </div>
              <div className="column is-two-thirds has-text-centered">
                <h2 className="subtitle is-size-5"> Ingredients</h2>
                {this.state.ingredients.map((ingredient, key) => {
                  return <p key={key}>{ingredient[0]} {ingredient[1]}</p>
                })}
              </div>
            </div>
          </section>
        </div>
        <div className="container">
          <h2 className="has-text-centered"> Instructions: {strInstructions}</h2>
        </div>


      </div>
    </section>
  }
}

export default SingleDrink