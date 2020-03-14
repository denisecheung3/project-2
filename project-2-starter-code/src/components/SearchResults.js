import React from 'react'
import axios from 'axios'

import DrinkCard from './DrinkCard'
// reuse DrinkCard?
//depends on which field the user used search/ dropdown / alcoholic or not we need to fetch from different endpoints.. or should it be in handlesubmit in search?
//could write a SearchResultLink() function like in auth.js with a bunch of if statements that returns a link



class SearchResults extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null //this would be an array of the drinks that is returned from search form
    }
  }


  componentDidMount() {
    // const linkToFetch = Search.SearchResultLink()
    // console.log(this.props.location)
    console.log('hi', this.props.location.url)
    // const { url } = this.props.location.state
    // console.log(url)
    const linktoFetchSearchResults = this.props.location.url

    axios.get(linktoFetchSearchResults)
      .then(res => {
        console.log('response', res.data)
        // const smallDrinksArray = res.data.drinks.map((drink) => {
        //   return this.getDrinks(drink)
        // })
        // console.log('smallDrinks', smallDrinksArray)
        this.setState({ data: res.data.drinks })
      })
  }

  // getDrinks(drink) {//puts in big drink i.e lots of info, outputs small drink with 3 info fields we need 
  //   return {
  //     idDrink: drink.idDrink,  //extracting .idDrink out of drink, what we pass to getDrinks(drink) <---- 
  //     strDrink: drink.strDrink,
  //     strDrinkThumb: drink.strDrinkThumb
  //   }
  // }


  render() {
    // if (!this.state.data) return null
    if (this.state.data === null) return null
    return <section className="section outerbackground">
      <div className="container innerbackground">
        <div className="columns is-mobile is-multiline">
          {/* {console.log('data', this.state.data[0])} */}
          {this.state.data.map((drink, index) => {
            return <DrinkCard
              drink={drink} //on the left is what matters for the receiving component to access the prop's 
              key={index}
            />
          })}
        </div>
      </div>
    </section>





  }

}

export default SearchResults